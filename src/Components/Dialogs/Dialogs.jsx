import st from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
    let debb = () => {
        console.log('123debb');
        console.log('321');
    }
    let dialogMap = props.dialogs.map(d => <DialogsItem ava={d.ava} name={d.name} id={d.id}/>)
    let messagesMap = props.messages.map(m => <Message ava={m.ava} message={m.message}/>)

    let onSendMessageClick = () => {
        props.addMessageCreater()
        debugger
    }
    let onNewMessageChange = (text) => {
        props.updateNewMessageChangeCreater(text)
    }

    debugger
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
                                   value={props.newMessageText} />
                    </div>
                    <div><button onClick={onSendMessageClick}>send</button></div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;