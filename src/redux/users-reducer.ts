import {ActionsTypes} from "./profile-reducer";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type LocationType = {
    city: string
    country: string
}

export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

const initialState = {
    users: [
        {
            id: 1,
            photoUrl: 'https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg',
            followed: false,
            fullName: 'Vit',
            status: 'student',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            photoUrl: 'https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg',
            followed: true,
            fullName: 'Ann',
            status: 'it-specialist',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            photoUrl: 'https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg',
            followed: false,
            fullName: 'Alex',
            status: 'doctor',
            location: {city: ' Kiev', country: 'Ukraine'}
        },
        {
            id: 4,
            photoUrl: 'https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg',
            followed: true,
            fullName: 'Hohol',
            status: 'it-ludoman',
            location: {city: 'Batymi', country: 'Georgia'}
        },
    ] as Array<UserType>,
}

type InitialStateType = typeof initialState;

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