import React from "react";
import {AddPostActionCreator, UpdateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {dispatch(AddPostActionCreator())},
        UpdateNewPostTextActionCreator: (event) => {
            let text = event.target.value
            dispatch(UpdateNewPostTextActionCreator(text))
        }
    }
}
let MyPostsConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPost)

export default MyPostsConteiner;