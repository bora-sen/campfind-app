import React, { useContext } from 'react'
import { authContext } from '../../Context/auth';

function Comments({comments}) {
  const {user} = useContext(authContext);


  async function handleAddComment(e){
    e.preventDefault();
    
    try {
      console.log("handled");
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