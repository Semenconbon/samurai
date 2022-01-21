import st from './MyPost.module.css'
import Post from "./Post/Post";
import React from "react";
import {AddPostActionCreator, UpdateNewPostTextActionCreator} from "../../../Redux/profile-reducer";

const MyPost = (props) => {

    let post = props.posts.map( m => (<Post message={m.message} counterLike={m.counterLike}/>) )

    let addNewPost = () => {
        props.dispatch(AddPostActionCreator())
    }

    let onChangePost = (event) => {
        let text = event.target.value;
        props.dispatch(UpdateNewPostTextActionCreator(text));
    }

    return (
        <div className={st.itemsBlock}>
            <div>
                <textarea placeholder={'Enter your letter'} onChange={onChangePost} value={props.newPostText}/>
                <button onClick={ addNewPost }>Add post</button>
            </div>
            <div>
                {post}
            </div>
        </div>
    )
}
export default MyPost;