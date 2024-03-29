import {ActionsTypes} from "./profile-reducer";

const SEND_MESSAGE = 'SEND-MESSAGE'

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type MessagesPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Vit'},
        {id: 2, name: 'Ann'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Victor'},
        {id: 5, name: 'Mike'},
        {id: 6, name: 'Andrei'},
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'YoYoYoYo'},
        {id: 5, message: '3:49'},
        {id: 6, message: 'good luck'},
    ] as Array<MessagesType>,

}

export type InitialStateType = typeof initialState;

export const dialogsReducer = (state: MessagesPageType = initialState, action: ActionsTypes): MessagesPageType => {
    switch (action.type) {

        case SEND_MESSAGE: {
            const body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: body}]
            };
        }
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody: string) => ({type: 'SEND-MESSAGE', newMessageBody} as const)