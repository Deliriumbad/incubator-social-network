import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

type PostsMessagePropsType = {
    id: number
    message: string
    likesCount: number
}
type PostsPropsType = {
    posts: Array<PostsMessagePropsType>
    message: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}

export const MyPosts: React.FC<PostsPropsType> = (props) => {

    const {posts, message, updateNewPostText, addPost} = props;

    const onAddPost = () => {
        addPost();
    }

    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        updateNewPostText(text)

    }

    const postsElements = posts.map(el => <Post key={el.id} message={el.message} likesCount={el.likesCount}/>)

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
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

