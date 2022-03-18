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
    addPost:()=>void
    message:string
    updateNewPostText:(text:string)=>void
}

export const MyPosts: React.FC<PostsPropsType> = (props) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.addPost()
    }

    const onPostChangeHandler = () => {
        const text = newPostElement.current?.value || ''
        props.updateNewPostText(text)

    }

    let postsElements = props.posts.map( el => <Post message={el.message} likesCount={el.likesCount}/>)

    return (
        <div className={s.postBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChangeHandler} ref={newPostElement}
                              value={props.message}/>
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