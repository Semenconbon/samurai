const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                counterLike: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state
        case UPDATE_NEW_POST_TEXT:
            let newText = action.newText
            state.newPostText = newText
            return state
        default:
            return state
    }

}
export const AddPostActionCreator = () => ({type: ADD_POST})
export const UpdateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profileReducer