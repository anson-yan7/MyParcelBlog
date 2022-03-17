import { PROFILE } from '../actions'

const defaultState = {
  img: '',
  text: '',
}

const profile = (state = defaultState, action) => {
  const { type, img, text } = action
  switch (type) {
    case PROFILE:
      return { img, text }
    default:
      return state
  }
}

export default profile
