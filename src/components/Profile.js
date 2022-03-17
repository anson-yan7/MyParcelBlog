import React, { useState } from 'react'
import { connect } from 'react-redux'
import ProfileInput from './ProfileInput'

const Profile = ({ img, text }) => {
  const [isEdit, setIsEdit] = useState(false)
  return (

    <>
      {!isEdit && <button type="button" onClick={() => setIsEdit(true)} className="btn btn-success pull-right">Edit</button>}
      {!isEdit
    && (
    <>
      {(img) && <img src={img} width="400" height="500" alt={img} />}
      <p>{text}</p>
    </>
    )}
      {isEdit && (<ProfileInput img={img} text={text} setIsEdit={setIsEdit} />)}
    </>
  )
}

const mapStateToProps = ({ profile }) => profile

export default connect(mapStateToProps, null)(Profile)
