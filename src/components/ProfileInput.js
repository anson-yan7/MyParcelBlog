import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addProfile } from '../actions'

const ProfileInput = ({
  img, text, dispatchAddProfile, setIsEdit,
}) => {
  const [image, setImage] = useState(img)
  const [editText, setEditText] = useState(text)
  return (
    <>
      <div className="text-center">
        <label>Image Link</label>
        <input value={image} onChange={e => setImage(e.target.value)} />
      </div>
      <div className="text-center">
        <label>Introduction</label>
        <input value={editText} onChange={e => setEditText(e.target.value)} />
      </div>
      <div className="text-center">
        <button
          type="button"
          onClick={() => {
            dispatchAddProfile(image, editText)
            setIsEdit(false)
          }}
          className="btn btn-primary"
        >
          {' '}
          Save
        </button>
        <button
          type="button"
          onClick={() => setIsEdit(false)}
          className="btn btn-primary"
        >
          Cancel
        </button>
      </div>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchAddProfile: (img, text) => dispatch(addProfile(text, img)),
})

export default connect(null, mapDispatchToProps)(ProfileInput)
