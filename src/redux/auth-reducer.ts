import {ActionsTypes} from "./profile-reducer";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'

export type AuthMeDataType = {
    id: number
    email: string
    login: string
    isAuth:boolean
}

let initialState = {
        id: 1,
        login: '',
        email: '',
        isAuth: false,
}

export type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}
export const setAuthUserData = (data:AuthMeDataType) =>
    ({type: SET_USER_DATA, data}) as const;

export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(res.data.data))
            }
        });
}

