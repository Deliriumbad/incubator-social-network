import React from 'react';
import {MyPosts} from "../MyPosts";
import {addPostActionCreator, changeNewTextActionCreator} from "../../../../redux/profile-reducer";
import {StoreContext} from "../../../../StoreContext";

export const MyPostsContainer = () => {

    return <StoreContext.Consumer>
        {
        (store) => {

            const state = store.getState();

            const addPost = () => {
                store.dispatch(addPostActionCreator())
            }

            const onPostChangeHandler = (text: string) => {
                const action = changeNewTextActionCreator(text)
                store.dispatch(action)

            }
            return <MyPosts addPost={addPost}
                     updateNewPostText={onPostChangeHandler}
                     posts={state.profilePage.posts}
                     message={state.profilePage.newPostText}
            />}
        }
    </StoreContext.Consumer>
}

