import st from './Post.module.css'

const Post = (props) => {
    return (
        <div className={st.item}>
            <div>
            <img src='https://bipbap.ru/wp-content/uploads/2018/03/03-3-700x637-640x582.jpg'/>
            {props.message}
            </div>
            <span>likes</span> {props.counterLike}
        </div>
    )
}
export default Post;