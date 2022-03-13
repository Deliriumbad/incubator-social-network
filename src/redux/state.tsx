import React from "react";

type DialogsPropsType = {
    id: number
    name: string
}
type MessagesPropsType = {
    id: number
    message: string
}
type PostsPropsType = {
    id: number
    message: string
    likesCount: string
}
type ProfilePagePropsType = {
    posts: Array<PostsPropsType>
}
type MessagesPagePropsType = {
    messages:Array<MessagesPropsType>
    dialogs: Array<DialogsPropsType>
}
export type StateRootPropsType = {
    profilePage:ProfilePagePropsType
    dialogsPage:MessagesPagePropsType
}
export type StatePropsType = {
    state:StateRootPropsType
}




export let state = {
    profilePage: {
        posts : [
            {id: 1, message: 'Hi, how are you', likesCount:'0'},
            {id: 2, message: 'My first post', likesCount:'23'}
        ],
    },
    dialogsPage: {
        messages : [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'YoYoYoYo'},
            {id: 5, message: '3:49'},
            {id: 6, message: 'good luck'},
        ],
        dialogs : [
            {id: 1, name: 'Vit'},
            {id: 2, name: 'Ann'},
            {id: 3, name: 'Alex'},
            {id: 4, name: 'Victor'},
            {id: 5, name: 'Mike'},
            {id: 6, name: 'Andrei'},
        ],
    },
}
