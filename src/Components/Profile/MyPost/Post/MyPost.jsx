import st from './MyPost.module.css'
import Post from "../Post";

const MyPost = () => {
    return (
        <div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>

                <Post message='Hello!!! Who are you?)' like='434'/>
                <Post message='Very fine' like='15'/>
                <Post message='Hello!!! I am first men in world!!!' like='960940'/>
            </div>
        </div>
    )
}
export default MyPost;