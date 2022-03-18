import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addPost, editPost, deletePost } from '../actions'

const PostInput = ({
  id, title = '', text = '', img = '', setIs, dispatchEditPost, dispatchAddPost, dispatchDeletePost,
}) => {
  const [editTitle, setEditTitle] = useState(title)
  const [editImg, setEditImg] = useState(img)
  const [editText, setEditText] = useState(text)
  return (
    <>
      <div>
        <label>Title</label>
        <input
          value={editTitle}
          onChange={e => {
            setEditTitle(e.target.value)
          }}
        />
      </div>
      <div>
        <label>Image Link</label>
        <input value={editImg} onChange={e => setEditImg(e.target.value)} />
      </div>
      <div>
        <label>Text</label>
        <input value={editText} onChange={e => setEditText(e.target.value)} />
      </div>
      <button
        type="button"
        onClick={() => {
          if (id) {
            dispatchEditPost(id, editTitle, editText, editImg)
          } else {
            dispatchAddPost(editTitle, editText, editImg)
          }
          setIs(false)
        }}
      >
        Save
      </button>
      <button
        type="button"
        onClick={() => {
          setIs(false)
          dispatchDeletePost(id)
        }}
      >
        Delete
      </button>
      <button
        type="button"
        onClick={() => setIs(false)}
      >
        Cancel
      </button>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchAddPost: (title, text, img) => dispatch(addPost(title, text, img)),
  dispatchEditPost: (id, title, text, img) => dispatch(editPost(id, title, text, img)),
  dispatchDeletePost: id => dispatch(deletePost(id)),
})

export default connect(null, mapDispatchToProps)(PostInput)
