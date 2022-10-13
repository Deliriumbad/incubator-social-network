import React from 'react';
import {ProfileInfo} from "./ProfelInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/Post/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
}

export const Profile = (props:ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateUserStatus={props.updateUserStatus}
            />
            <MyPostsContainer />
        </div>
    );
}