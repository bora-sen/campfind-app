import { uuidv4 } from "@firebase/util"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
import { collection, doc, getDoc, getDocs, query, setDoc, updateDoc } from "firebase/firestore"

import { auth, db } from "./index"

const campgroundsRef = collection(db, "campgrounds")

export async function Login(email, password) {
  try {
    const resp = await signInWithEmailAndPassword(auth, email, password)
    return resp
  } catch (error) {
    console.log(error)
    return null
  }
}
export async function SignUp(name, email, password) {
  const resp = await createUserWithEmailAndPassword(auth, email, password)
  await updateProfile(auth.currentUser, { displayName: name })
  return resp.user
}
export async function SignOut() {
  try {
    await signOut(auth)
    console.log("LOGOUT")
  } catch (error) {
    console.log(error)
  }
}
export async function createCampground(user, campgroundObj) {
  try {
    const newId = uuidv4()
    const newCampground = {
      _id: newId,
      title: campgroundObj.title,
      desc: campgroundObj.desc,
      placeholderImg: campgroundObj.placeholderImg,
      price: campgroundObj.price,
      userId: user.uid,
      userName: user.displayName,
      comments: [],
    }
    let resp = await setDoc(doc(db, "campgrounds", newCampground._id.toString()), newCampground)
    console.log(resp)
  } catch (error) {
    console.log(error)
  }
}

/*
createCampground({uid:"alsdjfklsjdf",email:"bora@test.com",name:"Bora"},{
    title:"Bora's Campground 1",
    desc:"lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ",
    placeholderImg:"https://loremflickr.com/1280/720/1",
    price:199.99
})
*/

export async function getAllCampgrounds() {
  try {
    const q = query(campgroundsRef, {})
    const camps = []
    const requestSnapshot = await getDocs(q)
    requestSnapshot.forEach((camp) => {
      camps.push(camp.data())
    })
    return camps
  } catch (error) {
    console.log(error)
  }
}
export async function getCampgroundById(campgroundId) {
  try {
    const q = query(doc(db, "campgrounds", campgroundId.toString()))
    const resp = await getDoc(q)
    const camp = resp.data()
    return resp.data()
  } catch (error) {
    console.log(error)
  }
}
export async function getComments(campgroundId) {
  try {
    const sel_camp = (await getCampgroundById(campgroundId)) ?? false
    if (!sel_camp) {
      console.log("There is no campground, returning..")
      return
    }
    return sel_camp.comments
  } catch (error) {
    console.log(error)
  }
}

export async function addCommentToCampground(campgroundId, commentObj) {
  try {
    const newUUID = uuidv4()
    const newCampObj = await getCampgroundById(campgroundId)

    const newComment = {
      _id: newUUID,
      author: commentObj.author,
      content: commentObj.content,
    }

    newCampObj.comments.push(newComment)

    await updateDoc(doc(db, "campgrounds", campgroundId), newCampObj)

    console.log("Comment is Added!!!")
  } catch (error) {
    console.log(error)
  }
}

export async function removeCommentFromCampground(campgroundId, commentId) {
  try {

    //console.log(campgroundId,commentId);
    const sel_camp = await getCampgroundById(campgroundId)
    console.log(sel_camp);

    sel_camp.comments = sel_camp.comments.filter(comment => {
      return comment._id !== commentId
    })

    await updateDoc(doc(db, "campgrounds", campgroundId), sel_camp)
    console.log("Comment id of -> ", commentId, " is deleted!!")
    console.log(sel_camp.comments)
    
  } catch (error) {
    console.log(error)
  }
}
