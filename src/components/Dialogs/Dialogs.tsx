import React from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

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
}

export const Dialogs: React.FC<DialogsProps> = (props) => {

    let dialogsElements = props.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>)
    let messagesElements = props.messages.map(el => <Message message={el.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}