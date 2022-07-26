import React from "react";
import {Users} from "./Users";
import {Dispatch} from "redux";
import {RootStateReduxType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import {connect} from "react-redux";

type MapStatePropsType = {
    users: Array<UserType>
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

const mapStateToProps = (state: RootStateReduxType): MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}

export type UserContainerPropsType = MapStatePropsType & MapDispatchPropsType

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch((unfollowAC(userId)));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateReduxType>(mapStateToProps, mapDispatchToProps)(Users)