import st from './MyPost.module.css'
import Post from "./Post/Post";


const MyPost = (props) => {

    let post = props.posts.map( m => (<Post message={m.message} counterLike={m.counterLike}/>) )

    return (
        <div className={st.itemsBlock}>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                {post}
            </div>
        </div>
    )
}
export default MyPost;