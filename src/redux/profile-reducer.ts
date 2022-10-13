import {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";
import {
    followSuccess,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleIsFetching,
    unfollowSuccess
} from "./users-reducer";
import {setAuthUserData} from "./auth-reducer";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

export type ActionsTypes = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof changeNewTextActionCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleFollowingProgress>
    | ReturnType<typeof setStatus>



export type ResponseGenericType<T = {}> = {
    data: T
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

type PhotosType = {
    small?: string
    large?: string
}

export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}

export type ProfilePageType = {
    posts: PostsType[]
    profile: ProfileType
    newPostText: string
    status: string
}

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 0},
        {id: 2, message: 'My first post', likesCount: 23}
    ],
    newPostText: '18.03.2022. 22:21',
    profile: {
        userId: 0,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        },
        aboutMe: '',
        photos: {
            small: '',
            large: ''
        }
    },
    status: '',
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
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}
export const addPostActionCreator = () => {
    return {type: 'ADD-POST'} as const
}
export const changeNewTextActionCreator = (newText: string) => {
    return {type: 'CHANGE-NEW-TEXT', newText: newText} as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {type: SET_USER_PROFILE, profile} as const
}
export const setStatus = (status: string) => {
    return {type: SET_STATUS, status} as const
}


export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId)
        .then((res) => {
            dispatch(setUserProfile(res.data))
        });
}

export const getUserStatus = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then((res) => {
            dispatch(setStatus(res.data))
        });
}

export const updateUserStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then((res) => {
            if(res.data.resultCode === 0){
                dispatch(setStatus(status))
            }
        });
}