const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText,
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            let newText = action.newText
            state.newMessageText = newText
            return state
        default: return state
    }
}

export const addMessageCreater = () => ({type: ADD_MESSAGE})
export const updateNewMessageChangeCreater = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})
export default dialogsReducer