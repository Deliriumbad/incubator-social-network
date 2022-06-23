import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfelInfo/ProfileInfo";
import {ActionsTypes} from "../../redux/profile-reducer";

type PostsPropsType = {
    id:number
    message:string
    likesCount:number
}
type ProfilePropsType = {
    posts: Array<PostsPropsType>
    message:string
    dispatch:(action: ActionsTypes)=>void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts}
                     message={props.message}
                     dispatch={props.dispatch}
            />
        </div>
    );
}