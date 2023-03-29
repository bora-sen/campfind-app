import React, { useContext } from "react"
import { authContext } from "../../Context/auth"
import { removeCommentFromCampground } from "../../Firebase/controller"

function Comment({ comment, campgroundId, getCurrentComments }) {
  const { author, content, _id } = comment
  const {user} = useContext(authContext)

  async function handleRemoveComment(e) {
    e.preventDefault()
    removeCommentFromCampground(campgroundId, _id)
    getCurrentComments()
  }
  function DeleteButton() {
    return (
      <div>
        <button onClick={(e) => handleRemoveComment(e)}>X</button>
      </div>
    )
  }
  return (
    <li className="flex justify-between items-center p-2 border-2 rounded-xl px-4">
      <div className="grid">
        <span className="font-bold">{author}</span>
        <span className="text-lg">{content}</span>
      </div>
      {comment.author === user.displayName ? <DeleteButton /> : <></>}

    </li>
  )
}

export default Comment
