import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ActionsTypes} from "../../../redux/state";

type PostsMessagePropsType = {
    id:number
    message:string
    likesCount:number
}
type PostsPropsType = {
    posts: Array<PostsMessagePropsType>
    message:string
    dispatch:(action: ActionsTypes)=>void
}

export const MyPosts: React.FC<PostsPropsType> = (props) => {

    const addPost = () => {
        props.dispatch({type: "ADD-POST", message: props.message})
    }

    const onPostChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.dispatch({type: 'CHANGE-NEW-TEXT', newText: text})

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