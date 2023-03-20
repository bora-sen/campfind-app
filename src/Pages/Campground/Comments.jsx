import React, { useContext, useEffect, useState } from 'react'
import { authContext } from '../../Context/auth';

import { getComments,addCommentToCampground } from '../../Firebase/controller';

function Comments({campground}) {
  const {user} = useContext(authContext);


  const [comments,setComments] = useState(false);

  async function getCurrentComments(){
    let currComment = await getComments(campground._id.toString());
    setComments(currComment)
  }

  useEffect(() => {
    getCurrentComments();
  },[])


  async function handleAddComment(e){
    e.preventDefault();
    try {
      let contentEl = document.getElementById('comment_content_input');
      let content = contentEl.value;

      const newComment = {
        author:user.displayName,
        content
      }
      await addCommentToCampground(campground._id,newComment);
      getCurrentComments();
      contentEl.value = "";

    } catch (error) {
      console.log(error);
    }
  }

  if(!comments) return (<div>Loading..</div>);

  return (
    <>
    <ul className='border-2 border-gray-200 p-4 divide-y grid gap-4'>
        {comments.map((comment,index) => {
            return (
                <li className='' key={index}>
                  <div className='grid gap-4'>
                    <span className='font-bold'>{comment.author}</span>
                    <span className='text-2xl'>{comment.content}</span>
                  </div>
                </li>
            )
        })}
    </ul>
    {
      user ?
      <form onSubmit={e => handleAddComment(e)}>
        <label htmlFor="add-comment-text">Add Comment</label>
        <input className='bg-gray-200 p-4 ' id='comment_content_input' type="text" />
      </form>
      :
      <></>
    }
    </>
  )
}

export default Comments