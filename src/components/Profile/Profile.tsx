import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfelInfo/ProfileInfo";

type PostsPropsType = {
    id:number
    message:string
    likesCount:string
}
type ProfilePropsType = {
    posts: Array<PostsPropsType>
}

export const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts} />
        </div>
    );
}