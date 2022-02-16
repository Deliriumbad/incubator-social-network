import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogsItemPropsType = {
    name: string
    id: number
}

type MessagePropsType = {
    message:string
}

const DialogItem = (props:DialogsItemPropsType) => {
    let path = '/dialogs/' + props.id

    return (
      <div className={s.dialog + ' ' + s.active}>
          <NavLink to={path}>{props.name}</NavLink>
      </div>
  );
}

const Message = (props:MessagePropsType) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    );
}

let dialogs = [
    {id: 1, name: 'Vit'},
    {id: 2, name: 'Ann'},
    {id: 3, name: 'Alex'},
    {id: 4, name: 'Victor'},
    {id: 5, name: 'Mike'},
    {id: 6, name: 'Andrei'},
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'YoYoYoYo'},
    {id: 5, message: 'tralalala'},
    {id: 6, message: 'good luck'},
]

let dialogsElements = dialogs.map( el =>  <DialogItem name={el.name} id={el.id}/>)

let messagesElements = messages.map( el => <Message message={el.message} />)

export const Dialogs = () => {
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