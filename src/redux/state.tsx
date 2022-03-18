let renderEntireTree = () => {
}

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
    likesCount: number
}
type ProfilePagePropsType = {
    posts: Array<PostsPropsType>
    newPostText: string
}
type MessagesPagePropsType = {
    messages: Array<MessagesPropsType>
    dialogs: Array<DialogsPropsType>
}
export type StateRootPropsType = {
    profilePage: ProfilePagePropsType
    dialogsPage: MessagesPagePropsType
}

export let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likesCount: 0},
            {id: 2, message: 'My first post', likesCount: 23}
        ],
        newPostText: '18.03.2022. 22:21',
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'YoYoYoYo'},
            {id: 5, message: '3:49'},
            {id: 6, message: 'good luck'},
        ],
        dialogs: [
            {id: 1, name: 'Vit'},
            {id: 2, name: 'Ann'},
            {id: 3, name: 'Alex'},
            {id: 4, name: 'Victor'},
            {id: 5, name: 'Mike'},
            {id: 6, name: 'Andrei'},
        ],
    },
}


export const addPost = (message: string) => {
    const newPost = {
        id: new Date().getTime(),
        message: message,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    renderEntireTree()
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    renderEntireTree()
}

export const subscribe = (observer: ()=> void) => {
    renderEntireTree = observer
}