import st from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={st.dialog  + ' ' + st.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={st.message}>{props.message}</div>
    )
}


const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Sergey'},
        {id: 2, name: 'Anna'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Alex'},
        {id: 5, name: 'Igor'}
    ]

    let messagesData = [
        {id: 1, message: 'Hellooo)))'},
        {id: 2, message: 'Who are you?'},
        {id: 3, message: 'Yes'},
        {id: 4, message: 'I am friend)))'},
        {id: 5, message: 'Oh. OMG, cringe'}
    ]

    return (
        <div className={st.dialogs}>
            <div className={st.dialogsItems}>
                <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogsItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogsItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>
            <div className={st.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>
            </div>
        </div>
    )
}
export default Dialogs;