import React from "react";
import {addMessageCreater, updateNewMessageChangeCreater} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessageCreater: () => {dispatch(addMessageCreater())},
        updateNewMessageChangeCreater: (text) =>{ dispatch(updateNewMessageChangeCreater(text))}
    }
}

const DialogsConteiner = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsConteiner;