const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

let initialState = {
    users: [
        {id: 1, photoURL: 'https://www.interfax.ru/ftproot/photos/photostory/2019/07/09/week4_700.jpg',
            followed: true, nameUser: 'Semyen', age: 19, status: 'Hello world'},
        {id: 2, photoURL: 'https://www.interfax.ru/ftproot/photos/photostory/2019/07/09/week4_700.jpg',
            followed: false, nameUser: 'Igor', age: 40, status: 'I am Igor'},
        {id: 3, photoURL: 'https://www.interfax.ru/ftproot/photos/photostory/2019/07/09/week4_700.jpg',
            followed: true, nameUser: 'Nastya', age: 4, status: 'Hey hey'}
    ],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u
                })

            }
        default:
            return state
    }
}
export const followUser = (userId) => ({type: FOLLOW, userId} )
export const unfollowUser = (userId) => ({type: UNFOLLOW, userId})
export default usersReducer




