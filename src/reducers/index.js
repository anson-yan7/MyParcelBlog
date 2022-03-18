import { combineReducers } from 'redux'

import postList from './postList'
import profile from './profile'

export default combineReducers({
  postList,
  profile,
})
