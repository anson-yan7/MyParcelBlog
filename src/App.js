import React from 'react'
import Profile from './components/Profile'
import Posts from './components/Posts'

export const App = () => (
  <>
    <div className="text-center">
      <h1>My Blog</h1>
      <Profile />
      <Posts />
    </div>
  </>
)

export default App
