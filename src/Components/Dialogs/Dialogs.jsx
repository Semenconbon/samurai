import st from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
    let dialogMap = props.dialogsPage.dialogs.map(d => <DialogsItem ava={d.ava} key={d.id} name={d.name} id={d.id}/>)
    let messagesMap = props.dialogsPage.messages.map(m => <Message ava={m.ava} key={m.id} message={m.message}/>)
    let onSendMessageClick = () => {
        props.addMessageCreater()
    }
    let onNewMessageChange = (text) => {
        props.updateNewMessageChangeCreater(text)
    }

    return (
        <div className={st.dialogs}>
            <div>
                {dialogMap} {/*Передаётся ава имя и id*/}
            </div>
            <div className={st.messages}>
                <div>{messagesMap}</div> {/*Передаётся сообщение*/}
                <div>
                    <div><textarea placeholder={'Enter your message'}
                                   onChange={onNewMessageChange}
                                   value={props.dialogsPage.newMessageText} />
                    </div>
                    <div><button onClick={onSendMessageClick}>send</button></div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;