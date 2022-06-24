import React from 'react';
import {ProfileInfo} from "./ProfelInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/Post/MyPostsContainer";
import {RootStoreType} from "../../redux/redux-store";

type ProfilePropsType = {
    store: RootStoreType
}

export const Profile: React.FC<ProfilePropsType> = (props) => {

    const {store} = props;

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer store={store}/>
        </div>
    );
}