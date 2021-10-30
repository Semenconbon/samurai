import st from './Profile.module.css'
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const  Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPost posts={props.posts}/>
        </div>
    )
}
export default Profile;