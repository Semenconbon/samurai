import st from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={st.dialogsItems}>
            <img src={props.ava} />
            <NavLink to={path} activeClassName={st.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogsItem;