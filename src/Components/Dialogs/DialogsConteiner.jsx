import React from "react";
import {addMessageCreater, updateNewMessageChangeCreater} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsConteiner = (props) => {

    let state = props.store.getState()
    let onSendMessageClick = () => {
        props.store.dispatch(addMessageCreater())
    }
    let onNewMessageChange = (event) => {
        let text = event.target.value
        props.store.dispatch(updateNewMessageChangeCreater(text))
    }

    return <Dialogs addMessageCreater={onSendMessageClick} updateNewMessageChangeCreater={onNewMessageChange}
                    state={state.dialogsPage} newMessageText={state.dialogsPage.newMessageText}/>

}
export default DialogsConteiner;