import st from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={st.nav}>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>Messages</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>Setting</a>
            </div>
            <div>
                <a>News</a>
            </div>
        </nav>
    )
}
export default Navbar;