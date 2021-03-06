import React from 'react';
import {MyPosts} from "../MyPosts";
import {addPostActionCreator, changeNewTextActionCreator, PostsType} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";
import {RootStateReduxType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";


type MapStatePropsType = {
    posts: Array<PostsType>
    message: string
}

type MapDispatchPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: RootStateReduxType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        message: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            const action = changeNewTextActionCreator(text);
            dispatch(action);
        }
    }
}

export const MyPostsContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateReduxType>(mapStateToProps, mapDispatchToProps)(MyPosts);

