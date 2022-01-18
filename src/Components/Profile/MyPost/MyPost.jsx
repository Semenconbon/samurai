import st from './MyPost.module.css'
import Post from "./Post/Post";
import React from "react";

const MyPost = (props) => {

    let post = props.posts.map( m => (<Post message={m.message} counterLike={m.counterLike}/>) )

    let newPostElement = React.createRef()

    let addNewPost = () => {
        // props.addPost(text)
        props.dispatch({ type: 'ADD-POST'})
    }

    let onChangePost = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
    }

    return (
        <div className={st.itemsBlock}>
            <div>
                <textarea onChange={onChangePost} ref={newPostElement} value={props.newPostText}/>
                <button onClick={ addNewPost }>Add post</button>
            </div>
            <div>
                {post}
            </div>
        </div>
    )
}
export default MyPost;