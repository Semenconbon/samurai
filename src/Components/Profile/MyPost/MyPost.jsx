import st from './MyPost.module.css'
import Post from "./Post/Post";


const MyPost = () => {

    let messageDate = [
        {message: 'Hello!!! Who are you?)', counterLike: '24'},
        {message: 'YEEEEEEAAAAHHH', counterLike: '31'},
        {message: 'Hello, i first man in world', counterLike: '2'}
    ]

    return (
        <div className={st.itemsBlock}>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post message={messageDate[0].message} counterLike={messageDate[0].counterLike}/>
                <Post message={messageDate[1].message} counterLike={messageDate[1].counterLike}/>
                <Post message={messageDate[2].message} counterLike={messageDate[2].counterLike}/>
            </div>
        </div>
    )
}
export default MyPost;