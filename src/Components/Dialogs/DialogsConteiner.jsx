import React from "react";
import {addMessageCreater, updateNewMessageChangeCreater} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessageCreater: () => {dispatch(addMessageCreater())},
        updateNewMessageChangeCreater: (event) => {
            let text = event.target.value
            dispatch(updateNewMessageChangeCreater(text))}
    }
}

const DialogsConteiner = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsConteiner;