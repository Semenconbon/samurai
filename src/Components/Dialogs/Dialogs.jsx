import st from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={st.dialogs}>
            <div className={st.dialogsItems}>
                <div className={st.dialog  + ' ' + st.active}>
                    Sergey
                </div>
                <div className={st.dialog}>
                    Dima
                </div>
                <div className={st.dialog}>
                    HelloBrother
                </div>
                <div className={st.dialog}>
                    Bog
                </div>
            </div>
            <div className={st.messages}>
                <div className={st.message}>Hello</div>
                <div className={st.message}>Im good</div>
                <div className={st.message}>Im bad</div>
            </div>
        </div>
    )
}
export default Dialogs;