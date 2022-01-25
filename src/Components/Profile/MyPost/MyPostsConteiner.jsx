import React from "react";
import {AddPostActionCreator, UpdateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPost from "./MyPost";

const MyPostsConteiner = (props) => {
    let state = props.store.getState()
    let addPost = () => {
        props.store.dispatch(AddPostActionCreator())
    }

    let onChangePost = (event) => {
        let text = event.target.value;
        props.store.dispatch(UpdateNewPostTextActionCreator(text));
    }

    return (
        <MyPost addPost={addPost} UpdateNewPostTextActionCreator={onChangePost} posts={state.profilePage.posts} newPostText={props.store.newPostText} />
    )
}
export default MyPostsConteiner;