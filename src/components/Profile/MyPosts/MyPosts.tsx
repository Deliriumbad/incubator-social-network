import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ActionsTypes, addPostActionCreator, changeNewTextActionCreator} from "../../../redux/profile-reducer";


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

    const {posts, message, dispatch} = props;

    const addPost = () => {
       dispatch(addPostActionCreator(message))
    }

    const onPostChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        dispatch(changeNewTextActionCreator(text))

    }

    const postsElements = posts.map( el => <Post key={el.id} message={el.message} likesCount={el.likesCount}/>)

    return (
        <div className={s.postBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChangeHandler}
                              value={message}
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

