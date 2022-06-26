import React from 'react';
import s from './Post.module.css';

type PropsPostType = {
    message: string
    likesCount: number
}

export const Post: React.FC<PropsPostType> = (props) => {

    const {message, likesCount} = props;

    return (
        <div className={s.item}>
            <img alt='pic' src='https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'/>
            {message}
            <div>
                <span>like  </span>{likesCount}
            </div>
        </div>
    );
}