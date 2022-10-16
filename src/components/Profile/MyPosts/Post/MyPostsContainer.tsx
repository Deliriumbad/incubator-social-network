import React from 'react';
import {MyPosts} from "../MyPosts";
import {addPostActionCreator, PostsType} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";
import {RootStateReduxType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";


type MapStatePropsType = {
    posts: Array<PostsType>
}

type MapDispatchPropsType = {
    addPost: (newPostText: string) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: RootStateReduxType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        },
    }
}

export const MyPostsContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateReduxType>(mapStateToProps, mapDispatchToProps)(MyPosts);

