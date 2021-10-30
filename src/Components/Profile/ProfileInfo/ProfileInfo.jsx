import st from './../Profile.module.css'

const ProfileInfo = (props) => {
    return(
        <div>
            <div>
                <img src='https://99px.ru/sstorage/53/2015/09/tmb_141476_1542.jpg'/>
            </div>
            <div className={st.itemsBlock}>
                <h1>ava + decript</h1>
            </div>
        </div>
    )
}

export default ProfileInfo;