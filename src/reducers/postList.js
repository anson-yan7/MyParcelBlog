import { ADD_POST, EDIT_POST, DELETE_POST } from '../actions'

const postList = (state = [], action) => {
  const {
    type, id, title, img, text,
  } = action
  const list = []
  switch (type) {
    case ADD_POST:
      return [...state, {
        id, title, img, text,
      }]
    case EDIT_POST:
      state.forEach(post => {
        if (post.id === id) {
          list.push({
            id, title, img, text,
          })
        } else {
          list.push(post)
        }
      })
      return list
    case DELETE_POST:
      return state.filter(post => post.id !== id)
    default: return state
  }
}

export default postList
