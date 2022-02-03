import Users from "./Users";
import {followUser, unfollowUser} from "../../Redux/users-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (action) => {dispatch(followUser(action))},
        unfollowUser: (action) => {dispatch(unfollowUser(action))}
    }
}

let UsersConteiner = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersConteiner;