import React from 'react';
import {MyPosts} from "../MyPosts";
import {addPostActionCreator, changeNewTextActionCreator} from "../../../../redux/profile-reducer";
import {RootStoreType} from "../../../../redux/redux-store";

type PostsPropsType = {
    store: RootStoreType
}

export const MyPostsContainer: React.FC<PostsPropsType> = (props) => {

    const {store} = props;

    const state = store.getState();

    const addPost = () => {
        store.dispatch(addPostActionCreator())
    }

    const onPostChangeHandler = (text: string) => {
        const action = changeNewTextActionCreator(text)
        store.dispatch(action)

    }

    return <div>
        <MyPosts addPost={addPost}
                 updateNewPostText={onPostChangeHandler}
                 posts={state.profilePage.posts}
                 message={state.profilePage.newPostText}/>
    </div>
}

