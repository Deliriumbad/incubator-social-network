import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfelInfo/ProfileInfo";

type PostsPropsType = {
    id:number
    message:string
    likesCount:number
}
type ProfilePropsType = {
    posts: Array<PostsPropsType>
    addPost:()=>void
    updateNewPostText:(test:string)=>void
    message:string
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts}
                     addPost={props.addPost}
                     message={props.message}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
}