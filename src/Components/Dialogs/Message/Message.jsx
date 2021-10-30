import st from './../Dialogs.module.css'

const Message = (props) => {
    return (
        <div className={st.message}>{props.message}</div>
    )
}

export default Message;