import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {RootStoreType} from "../../redux/redux-store";

type DialogsProps = {
    store: RootStoreType
}

export const DialogsContainer: React.FC<DialogsProps> = (props) => {

    const {store} = props;

    let state = store.getState()

    const onSendMessageClick = () => {
        store.dispatch(sendMessageCreator())
    }
    const onNewMessageChange = (body: string) => {
        store.dispatch(updateNewMessageBodyCreator(body))
    }

    return <div>
        <Dialogs sendMessage={onSendMessageClick}
                 updateNewMessageBody={onNewMessageChange}
                 state={state}/>
    </div>
}