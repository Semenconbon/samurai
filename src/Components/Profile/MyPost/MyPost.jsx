import st from './MyPost.module.css'
import Post from "./Post/Post";
import React from "react";

const MyPost = (props) => {
    let post = props.posts.map( m => (<Post message={m.message} counterLike={m.counterLike}/>) )

    let addPost = () => {
        props.addPost();
    }

    let onChangePost = (text) => {
        props.UpdateNewPostTextActionCreator(text)
    }

    return (
        <div className={st.itemsBlock}>
            <div>
                <textarea placeholder={'Enter your letter'} onChange={onChangePost} value={props.newPostText}/>
                <button onClick={ addPost }>Add post</button>
            </div>
            <div>
                {post}
            </div>
        </div>
    )
}
export default MyPost;