import st from './Profile.module.css'
import MyPost from "./MyPost/Post/MyPost";

const  Profile = () => {
    return (
        <div className={st.content}>
            <div>
                <img src='https://99px.ru/sstorage/53/2015/09/tmb_141476_1542.jpg'/>
            </div>
            <div>
                ava + decript
            </div>
            <MyPost />
        </div>
    )
}
export default Profile;