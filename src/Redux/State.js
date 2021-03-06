import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello!!! Who are you?)', counterLike: '24'},
                {id: 2, message: 'YEEEEEEAAAAHHH', counterLike: '31'},
                {id: 3, message: 'Hello, i first man in world', counterLike: '3'}
            ],
            newPostText: ""
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Sergey', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQND0Br49DEhXKhAaASompT8rXn8mzWE6r92A&usqp=CAU'},
                {id: 2, name: 'Anna', ava: 'https://lh3.googleusercontent.com/proxy/oIZ7O6Uo-TBN7xAjEEvjGJDA-cgklc1-Znp81RlM72-Av1UrqqYxdqkCmsqlxhLLpBV8GVaWeys_kyvk0rWAXcAvb7_slT0Jf2wk3uqkiyArC89Korw'},
                {id: 3, name: 'Dima', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5d2_7E7fYhdaztfipZ2KZFLcyZi9PJ1k9ZA&usqp=CAU'},
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
        },

    },
    getState(){
        return this._state
    },
    _callSubscriber(){
        console.log('state changed')
    },
    subscribe(observer){
        this._callSubscriber = observer
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}

window.store = store
export default store