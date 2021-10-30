import st from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {


    let dialogMap = props.dialogs.map( d =>  <DialogsItem name={d.name} id={d.id}/>)
    let messagesMap = props.messages.map( m => <Message message={m.message} />)

    return (
        <div className={st.dialogs}>
            <div className={st.dialogsItems}>
                {dialogMap}
            </div>
            <div className={st.messages}>
                {messagesMap}
            </div>
        </div>
    )
}
export default Dialogs;