import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";



export const MyPosts = () => {
    let posts = [
        {id: 1, message: 'Hi, how are you', likesCount:'0'},
        {id: 2, message: 'My first post', likesCount:'23'}
    ]

    let postsElements = posts.map( el => <Post message={el.message} likesCount={el.likesCount}/>)

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