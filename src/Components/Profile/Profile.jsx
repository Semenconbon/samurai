import st from './Profile.module.css'
import MyPost from "./MyPost/MyPost";


const ProfileInfo = (props) => {
    return(
        <div>
            <div>
                <img src='https://99px.ru/sstorage/53/2015/09/tmb_141476_1542.jpg'/>
            </div>
            <div className={st.itemsBlock}>
                ava + decript
            </div>
        </div>
    )
}

const  Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPost />
        </div>
    )
}
export default Profile;