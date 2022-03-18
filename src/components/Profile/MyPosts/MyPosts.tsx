import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

type PostsMessagePropsType = {
    id:number
    message:string
    likesCount:number
}
type PostsPropsType = {
    posts: Array<PostsMessagePropsType>
    addPost:(message:string)=>void
    message:string
    updateNewPostText:(text:string)=>void
}

export const MyPosts: React.FC<PostsPropsType> = (props) => {



    const addPost = () => {
        props.addPost(props.message)
    }

    const onPostChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)

    }

    let postsElements = props.posts.map( el => <Post key={el.id} message={el.message} likesCount={el.likesCount}/>)

    return (
        <div className={s.postBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChangeHandler}
                              value={props.message}
                    />
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