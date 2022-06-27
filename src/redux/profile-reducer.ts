import {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";
import {followAC, setUsersAC, unfollowAC} from "./users-reducer";

const ADD_POST = 'ADD-POST'
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT'

export type ActionsTypes = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof changeNewTextActionCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>

export type PostsPropsType = {
    id: number
    message: string
    likesCount: number
}

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 0},
        {id: 2, message: 'My first post', likesCount: 23}
    ] as Array<PostsPropsType>,
    newPostText: '18.03.2022. 22:21',
}

export type InitialStateType = typeof initialState;

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }
        }
        case CHANGE_NEW_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            };
        }
        default:
            return state;
    }
}
export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    } as const
}
export const changeNewTextActionCreator = (newText: string) => {
    return {
        type: 'CHANGE-NEW-TEXT',
        newText: newText
    } as const
}//обновить тело нового сообщения - перевод