import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfelInfo/ProfileInfo";

type PostsPropsType = {
    id:number
    message:string
    likesCount:number
}
type ProfilePropsType = {
    posts: Array<PostsPropsType>
    addPost:(post:string)=>void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts}
                     addPost={props.addPost}
            />
        </div>
    );
}