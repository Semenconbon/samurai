let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello!!! Who are you?)', counterLike: '24'},
                {id: 2, message: 'YEEEEEEAAAAHHH', counterLike: '31'},
                {id: 3, message: 'Hello, i first man in world', counterLike: '3'}
            ],
            newPostText: "Write to letter"
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
                {id: 1, message: 'Hellooo)))', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQND0Br49DEhXKhAaASompT8rXn8mzWE6r92A&usqp=CAU' },
                {id: 2, message: 'Who are you?', ava: 'https://lh3.googleusercontent.com/proxy/oIZ7O6Uo-TBN7xAjEEvjGJDA-cgklc1-Znp81RlM72-Av1UrqqYxdqkCmsqlxhLLpBV8GVaWeys_kyvk0rWAXcAvb7_slT0Jf2wk3uqkiyArC89Korw'},
                {id: 3, message: 'Yes', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5d2_7E7fYhdaztfipZ2KZFLcyZi9PJ1k9ZA&usqp=CAU' },
                {id: 4, message: 'I am friend)))', ava: 'https://www.meme-arsenal.com/memes/50569ac974c29121ff9075e45a334942.jpg'},
                {id: 5, message: 'Oh. OMG, cringe', ava: 'https://memax.club/wp-content/uploads/2019/05/Kartinki_bez_lica_1_29050439.jpg'}
            ]
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
    addPost(){
        let newPost = {
            id: 4,
            message: this._state.profilePage.newPostText,
            counterLike: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostChange(newText){
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    dispatch(action){
        if (action.type === 'ADD-POST'){
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                counterLike: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            let newText = action.newText
            this._state.profilePage.newPostText = newText
            this._callSubscriber(this._state)
        }
    }
}

window.store = store
export default store