import React, { useState } from 'react'
import PostInput from './PostInput'

const Post = ({
  id, title, text, img,
}) => {
  const [isEdit, setIsEdit] = useState(false)
  return (
    <>
      {!isEdit && (
      <>
        <p>
          Post #
          {id}
        </p>
        <h5>{title}</h5>
        {(img) && <img src={img} width="200" height="300" alt={img} />}
        <p>{text}</p>
        <button
          type="button"
          onClick={() => setIsEdit(true)}
        >
          Edit
        </button>
      </>
      )}
      {isEdit && <PostInput id={id} title={title} img={img} text={text} setIs={setIsEdit} />}
    </>
  )
}

export default Post
