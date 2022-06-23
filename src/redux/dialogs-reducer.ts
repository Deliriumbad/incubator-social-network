import {MessagesPagePropsType} from "./state";
import {addPostActionCreator, changeNewTextActionCreator} from "./profile-reducer";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

type DialogsReducerPropsType = {
    state: MessagesPagePropsType
    action: ActionsTypes
}

export type ActionsTypes = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof changeNewTextActionCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof sendMessageCreator>


export const dialogsReducer = (props: DialogsReducerPropsType) => {

    const {state, action} = props;

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            const body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 7, message: body});
            return state;
        default:
            return state;
    }
}

export const updateNewMessageBodyCreator = (body:string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
}
export const sendMessageCreator = () => ( {type: 'SEND-MESSAGE'} as const )