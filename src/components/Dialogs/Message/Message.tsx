import React from "react";
import s from "./../Dialogs.module.css";

type MessagePropsType = {
    message:string
}

export const Message: React.FC<MessagePropsType> = (props) => {

   const {message} = props;

    return (
        <div className={s.dialog}>{message}</div>
    );
}
