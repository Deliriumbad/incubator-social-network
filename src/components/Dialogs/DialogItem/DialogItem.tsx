import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogsItemPropsType = {
    name: string
    id: number
}

export const DialogItem: React.FC<DialogsItemPropsType> = (props) => {

    const {name, id} = props;

    let path = '/dialogs/' + id;

    return (
      <div className={s.dialog + ' ' + s.active}>
          <NavLink to={path}>{name}</NavLink>
      </div>
  );
}


