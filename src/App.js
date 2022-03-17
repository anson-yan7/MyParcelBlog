import Profile from './components/Profile.js'
import React from 'react'
import Posts from './components/Posts.js'


export const App = () => {
    return (<>
    <div class="text-center">
      <h1>My Blog</h1>
      <Profile />
      <Posts />
    </div>
    </>)
  }

export default App