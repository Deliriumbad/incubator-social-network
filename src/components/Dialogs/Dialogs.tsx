import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {RootStateReduxType} from "../../redux/redux-store";

type DialogsProps = {
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
    state: RootStateReduxType
}

export const Dialogs: React.FC<DialogsProps> = (props) => {

    const {state, sendMessage, updateNewMessageBody} = props;

    let dialogsPage = state.dialogsPage

    const dialogsElements = dialogsPage.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>)
    const messagesElements = dialogsPage.messages.map(el => <Message message={el.message}/>)
    const newMessageBody = dialogsPage.newMessageBody


    const onSendMessageClick = () => {
        sendMessage()
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.target.value
        updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'>

                    </textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}