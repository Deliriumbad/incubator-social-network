import {ProfilePagePropsType} from "./state";
import {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";

const ADD_POST = 'ADD-POST'
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT'

type ProfileReducerPropsType = {
    state: ProfilePagePropsType
    action: ActionsTypes
}

export type ActionsTypes = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof changeNewTextActionCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof sendMessageCreator>


export const profileReducer = (props:ProfileReducerPropsType) => {

    const {state, action} = props

    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case CHANGE_NEW_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export const addPostActionCreator = (message:string) => {
    return {
        type: 'ADD-POST',
        message:message
    } as const
}
export const changeNewTextActionCreator = (newText:string) => {
    return {
        type: 'CHANGE-NEW-TEXT',
        newText:newText
    } as const
}//обновить тело нового сообщения - перевод