export const PROFILE = 'PROFILE'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'

let id = 1

export const addProfile = (text, img) => ({
    type: PROFILE,
    id: 0,
    text,
    img
})

export const addPost = (title, text, img) => ({
    type: ADD_POST,
    id: id++,
    title,
    img,
    text
})

export const editPost = (id, title, text, img) => ({
    type: EDIT_POST,
    id,
    title,
    img,
    text
})

export const deletePost = id => ({
    type: DELETE_POST,
    id
})




