import axios from 'axios';
import React from 'react'
import { useSelector } from 'react-redux';

function Comments({campgroundObj,comments}) {
  const {user} = useSelector(store => store.auth)


  async function handleAddComment(e){
    e.preventDefault();
    try {
      let newComment = document.getElementById('add-comment-text').value;
      console.log(newComment);
      console.log(campgroundObj._id);
      const reqConfig = {
        headers:{
          Authorization:`Bearer ${user.accessToken}`
        }
      }
  
      const reqData = {
        campgroundId:campgroundObj._id,
        title:newComment
      }
      console.log(reqData);
  
      const resp = await axios.post('http://localhost:4000/api/v1/add-comment',reqData,reqConfig);
      if(resp.status === 200) console.log("Your Comment is Added!");
      console.log(resp);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <ul className='border-2 border-gray-200 p-4 divide-y grid gap-4'>
        {comments.map((comment,index) => {
          console.log(comment);
            return (
                <li className='' key={index}>
                  <div className='grid gap-4'>
                    <span className='font-bold'>{comment.author}</span>
                    <span className='text-2xl'>{comment.title}</span>
                  </div>
                </li>
            )
        })}
    </ul>
    {
      user !== false ?
      <form onSubmit={e => handleAddComment(e)}>
        <label htmlFor="add-comment-text">Add Comment</label>
        <input className='bg-gray-200 p-4 ' id='add-comment-text' type="text" />
      </form>
      :
      <></>
    }
    </>
  )
}

export default Comments