import React, { useState } from 'react'
import { connect } from 'react-redux'
import Post_input from './PostInput'
import Post from './Post'

const Posts = ({ postList }) => {
  const [isAdd, setIsAdd] = useState(false)
  return (
    <>
      <h3>Blog Posts</h3>
      {!isAdd && <button type="button" onClick={() => setIsAdd(true)}>ADD POST</button>}
      {isAdd && (<Post_input setIs={setIsAdd} />)}
      {postList.map(post => <Post id={post.id} title={post.title} text={post.text} img={post.img} />)}
    </>
  )
}
const mapStateToProps = ({ postList }) => ({ postList })

export default connect(mapStateToProps, null)(Posts)
