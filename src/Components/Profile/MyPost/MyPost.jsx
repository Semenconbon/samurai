import st from './MyPost.module.css'
import Post from "./Post/Post";
import React from "react";


const MyPost = (props) => {

    let post = props.posts.map( m => (<Post message={m.message} counterLike={m.counterLike}/>) )

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
        <div className={st.itemsBlock}>
            <div>
                <textarea ref={newPostElement}></textarea>
                <button onClick={ addPost }>Add post</button>
            </div>
            <div>
                {post}
            </div>
        </div>
    )
}
export default MyPost;