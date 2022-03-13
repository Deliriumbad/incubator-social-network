import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

type PostsMessagePropsType = {
    id:number
    message:string
    likesCount:number
}
type PostsPropsType = {
    posts: Array<PostsMessagePropsType>
    addPost:(post:string)=>void
}

export const MyPosts = (props:PostsPropsType) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {

        const text = newPostElement.current?.value || ''
        props.addPost(text)
    }

    let postsElements = props.posts.map( el => <Post message={el.message} likesCount={el.likesCount}/>)

    return (
        <div className={s.postBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}>hi</textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}