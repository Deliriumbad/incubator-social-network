import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

export const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {
        (store)=> {

            let state = store.getState();

            const onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            }
            const onNewMessageChange = (body: string) => {
                store.dispatch(updateNewMessageBodyCreator(body));
            }

            return <Dialogs sendMessage={onSendMessageClick}
                            updateNewMessageBody={onNewMessageChange}
                            state={state}/>
        }
    }
    </StoreContext.Consumer>
}