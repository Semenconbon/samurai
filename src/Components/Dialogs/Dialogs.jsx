import st from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
    let dialogMap = props.state.dialogs.map(d => <DialogsItem ava={d.ava} name={d.name} id={d.id}/>)
    let messagesMap = props.state.messages.map(m => <Message ava={m.ava} message={m.message}/>)

    let newMessageElement = React.createRef();
    let addNewMessage = () => {
        let text = newMessageElement.current.value;
        alert(text)
    }
    return (
        <div className={st.dialogs}>
            <div>
                {dialogMap} {/*Передаётся ава имя и id*/}
            </div>
            <div className={st.messages}>
                {messagesMap} {/*Передаётся сообщение*/}
                <textarea ref={newMessageElement}></textarea>
                <button onClick={addNewMessage}>send</button>
            </div>

        </div>
    )
}
export default Dialogs;