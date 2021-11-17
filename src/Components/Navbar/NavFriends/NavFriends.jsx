import st from './../Navbar.module.css'
import {NavLink} from "react-router-dom";

const NavFriends = () => {
    return (
        <div>
            <div className={st.friends}>
                <NavLink to='/friends' activeClassName={st.activeNavLink}>Friends</NavLink>
            </div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh9B4hNkS38VfKOTcdO-x5z_Q2huS34bfHxg&usqp=CAU"/>
                <img src="https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg"/>
                <img src="https://klike.net/uploads/posts/2020-04/1587719791_1.jpg"/>
            </div>
        </div>
    )
}
export default NavFriends;