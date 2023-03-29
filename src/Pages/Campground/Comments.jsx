import React, { useContext, useEffect, useState } from "react"
import { authContext } from "../../Context/auth"

import { getComments, addCommentToCampground } from "../../Firebase/controller"
import Comment from "./Comment"

function Comments({ campground }) {
  const { user } = useContext(authContext)

  const [comments, setComments] = useState(false)

  async function getCurrentComments() {
    let currComment = await getComments(campground._id.toString())
    setComments(currComment)
  }

  useEffect(() => {
    getCurrentComments()
  }, [])

  async function handleAddComment(e) {
    e.preventDefault()
    try {
      let contentEl = document.getElementById("comment_content_input")
      let content = contentEl.value

      const newComment = {
        author: user.displayName,
        content,
      }
      await addCommentToCampground(campground._id, newComment)
      getCurrentComments()
      contentEl.value = ""
    } catch (error) {
      console.log(error)
    }
  }

  if (!comments) return <div>Loading..</div>

  function CommentList() {
    if (campground.comments.length > 0) {
      return (
        <ul className="p-4 grid gap-4">
          {comments.map((comment, index) => {
            return <Comment getCurrentComments={getCurrentComments} key={index} comment={comment} campgroundId={campground._id} />
          })}
        </ul>
      )
    } else {
      return <div></div>
    }
  }
  function AddCommentForm() {
    if (user) {
      return (
        <form onSubmit={(e) => handleAddComment(e)}>
          <label htmlFor="add-comment-text">Add Comment</label>
          <input className="bg-gray-200 p-4 " id="comment_content_input" type="text" />
        </form>
      )
    } else {
      return
    }
  }

  return (
    <>
      <CommentList />
      <AddCommentForm />
    </>
  )
}

export default Comments
