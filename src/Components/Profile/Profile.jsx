import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsConteiner from "./MyPost/MyPostsConteiner";

const  Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsConteiner store={props.store}/>
        </div>
    )
}
export default Profile;