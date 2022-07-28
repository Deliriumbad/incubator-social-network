import {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "./users-reducer";
import {GetResponseType} from "../components/Profile/ProfileContainer";

const ADD_POST = 'ADD-POST'
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

export type ActionsTypes = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof changeNewTextActionCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>



type GetResponseContactsType = {
    facebook: string
    website?: null
    vk: string
    twitter: string
    instagram: string
    youtube?: null
    github: string
    mainLink?: null
}

type GetResponsePhotosType = {
    small: string
    large: string
}

type ProfileType = {
    aboutMe: string
    contacts: GetResponseContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: GetResponsePhotosType
}






export type PostsType = {
    id: number
    message: string
    likesCount: number
}

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 0},
        {id: 2, message: 'My first post', likesCount: 23}
    ] as Array<PostsType>,
    newPostText: '18.03.2022. 22:21',
    profile: null
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
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }

        default:
            return state;
    }
}
export const addPostActionCreator = () => {
    return { type: 'ADD-POST' } as const
}
export const changeNewTextActionCreator = (newText: string) => {
    return {type: 'CHANGE-NEW-TEXT', newText: newText} as const
}
export const setUserProfile = (profile: any) => {
    return {type: SET_USER_PROFILE, profile} as const
}