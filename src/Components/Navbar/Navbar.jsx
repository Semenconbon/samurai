import st from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={st.nav}>
            <div className={st.item}>
                <div>
                    <NavLink to='/profile' activeClassName={st.activeNavLink}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to='/messages' activeClassName={st.activeNavLink}>Messages </NavLink>
                </div>
                <div>
                    <NavLink to='/music' activeClassName={st.activeNavLink}>Music</NavLink>
                </div>
                <div>
                    <NavLink to='/settings' activeClassName={st.activeNavLink}>Settings</NavLink>
                </div>
                <div>
                    <NavLink to='/news' activeClassName={st.activeNavLink}>News</NavLink>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;