import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsTypes, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    id: number
    name: string
}
type MessagesPropsType = {
    id: number
    message: string
}

type DialogsProps = {
    dialogs: Array<DialogsPropsType>
    messages: Array<MessagesPropsType>
    dispatch:(action: ActionsTypes)=>void
    newMessageBody:string
}

export const Dialogs: React.FC<DialogsProps> = (props) => {



    const {dialogs, messages, dispatch, newMessageBody} = props;

    const dialogsElements = dialogs.map(el => <DialogItem name={el.name} id={el.id}/>)
    const messagesElements = messages.map(el => <Message message={el.message} />)


    const onSendMessageClick = () => {
       dispatch(sendMessageCreator())
    }
    const onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.target.value
        dispatch(updateNewMessageBodyCreator(body))
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
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    );
}