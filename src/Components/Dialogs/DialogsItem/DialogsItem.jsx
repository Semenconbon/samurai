import st from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={st.dialog  + ' ' + st.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogsItem;