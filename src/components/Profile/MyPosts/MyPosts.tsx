import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

type PostsMessagePropsType = {
    id:number
    message:string
    likesCount:string
}
type PostsPropsType = {
    posts: Array<PostsMessagePropsType>
}

export const MyPosts = (props:PostsPropsType) => {

    let postsElements = props.posts.map( el => <Post message={el.message} likesCount={el.likesCount}/>)

    return (
        <div className={s.postBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea>hi</textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}