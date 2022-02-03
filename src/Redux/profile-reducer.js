const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        {id: 1, message: 'Hello!!! Who are you?)', counterLike: '24'},
        {id: 2, message: 'YEEEEEEAAAAHHH', counterLike: '31'},
        {id: 3, message: 'Hello, i first man in world', counterLike: '3'}
    ],
    newPostText: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:
        let newPost = {
            id: 4,
            message: state.newPostText,
            counterLike: 0
        }
        return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: ''
        }
        case UPDATE_NEW_POST_TEXT:
        return {
            ...state,
            newPostText: action.newText
        }
        default:
            return state
}

}
export const AddPostActionCreator = () => ({type: ADD_POST})
export const UpdateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profileReducer