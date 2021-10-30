import st from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Sergey'},
        {id: 2, name: 'Anna'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Alex'},
        {id: 5, name: 'Igor'}
    ]

    let messages = [
        {id: 1, message: 'Hellooo)))'},
        {id: 2, message: 'Who are you?'},
        {id: 3, message: 'Yes'},
        {id: 4, message: 'I am friend)))'},
        {id: 5, message: 'Oh. OMG, cringe'}
    ]
    let dialogMap = dialogs.map( d =>  <DialogsItem name={d.name} id={d.id}/>)
    let messagesMap = messages.map( m => <Message message={m.message} />)

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