import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./Post/MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validatots/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

type FormDataType = {
    newPostText: string
}

const maxLength10 = maxLengthCreator(10)

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const {posts, addPost} = props;

    const onAddPost = (values: FormDataType) => {
        addPost(values.newPostText);
        console.log(values)
    }

    const postsElements = posts.map(el => <Post key={el.id} message={el.message} likesCount={el.likesCount}/>);

    return (
        <div className={s.postBlock}>
            <h3>my posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText'
                       component={Textarea}
                       validate={[required, maxLength10]}
                       placeholder='Post message'
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm<FormDataType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)
