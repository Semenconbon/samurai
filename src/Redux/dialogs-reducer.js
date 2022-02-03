const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Sergey',
            ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQND0Br49DEhXKhAaASompT8rXn8mzWE6r92A&usqp=CAU'
        },
        {
            id: 2,
            name: 'Anna',
            ava: 'https://lh3.googleusercontent.com/proxy/oIZ7O6Uo-TBN7xAjEEvjGJDA-cgklc1-Znp81RlM72-Av1UrqqYxdqkCmsqlxhLLpBV8GVaWeys_kyvk0rWAXcAvb7_slT0Jf2wk3uqkiyArC89Korw'
        },
        {
            id: 3,
            name: 'Dima',
            ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5d2_7E7fYhdaztfipZ2KZFLcyZi9PJ1k9ZA&usqp=CAU'
        },
        {id: 4, name: 'Alex', ava: 'https://www.meme-arsenal.com/memes/50569ac974c29121ff9075e45a334942.jpg'},
        {id: 5, name: 'Igor', ava: 'https://memax.club/wp-content/uploads/2019/05/Kartinki_bez_lica_1_29050439.jpg'}
    ],
    messages: [
        {id: 1, message: 'Hellooo)))'},
        {id: 2, message: 'Who are you?'},
        {id: 3, message: 'Yes'},
        {id: 4, message: 'I am friend)))'},
        {id: 5, message: 'Oh. OMG, cringe'}
    ],
    newMessageText: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 6,
                message: state.newMessageText,
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText
            }
        }
        default:
            return state
    }
}

export const addMessageCreater = () => ({type: ADD_MESSAGE})
export const updateNewMessageChangeCreater = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})
export default dialogsReducer