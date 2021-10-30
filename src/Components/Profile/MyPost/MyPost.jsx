import st from './MyPost.module.css'
import Post from "./Post/Post";


const MyPost = () => {
    let posts = [
        {message: 'Hello!!! Who are you?)', counterLike: '24'},
        {message: 'YEEEEEEAAAAHHH', counterLike: '31'},
        {message: 'Hello, i first man in world', counterLike: '2'}
    ]
    let post = posts.map( m => (<Post message={m.message} counterLike={m.counterLike}/>) )

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