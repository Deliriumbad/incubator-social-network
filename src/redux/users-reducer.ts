import {ActionsTypes} from "./profile-reducer";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

/*export type LocationType = {
    city: string
    country: string
}

export type UserType1 = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}*/

export type PhotosType = {
    small?: string
    large?: string
}

export type UserType = {
    name: string
    id: number
    uniqueUrlName?: string
    photos: PhotosType
    status?: string
    followed: boolean
}

const initialState = {
    users: [

    ] as Array<UserType>
}

export type InitialStateType = typeof initialState

export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }

        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }

        default:
            return state;
    }
}
export const followAC = (userId: number) => ({type: FOLLOW, userId}) as const;

export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId}) as const;

export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users}) as const;