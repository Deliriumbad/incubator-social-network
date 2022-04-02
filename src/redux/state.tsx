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
    newMessageBody:string
}
export type StateRootPropsType = {
    profilePage: ProfilePagePropsType
    dialogsPage: MessagesPagePropsType
}

export type StoreType = {
    _state: StateRootPropsType
    getState:()=>StateRootPropsType
    _renderEntireTree:()=>void
    subscribe:(observer: ()=> void)=>void
    dispatch:(action:ActionsTypes)=>void
}

export type ActionsTypes = ReturnType<typeof addPostActionCreator>
                         | ReturnType<typeof changeNewTextActionCreator>
                         | ReturnType<typeof updateNewMessageBodyCreator>
                         | ReturnType<typeof sendMessageCreator>


const ADD_POST = 'ADD-POST'
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'



export const store: StoreType = {
    _state : {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 0},
                {id: 2, message: 'My first post', likesCount: 23}
            ],
            newPostText: '18.03.2022. 22:21',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Vit'},
                {id: 2, name: 'Ann'},
                {id: 3, name: 'Alex'},
                {id: 4, name: 'Victor'},
                {id: 5, name: 'Mike'},
                {id: 6, name: 'Andrei'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'YoYoYoYo'},
                {id: 5, message: '3:49'},
                {id: 6, message: 'good luck'},
            ],
            newMessageBody: '',
        },
    },
    _renderEntireTree () {
    },

    getState(){
        return this._state
    },
    subscribe (observer) {
        this._renderEntireTree = observer
    },

    dispatch (action) {
        if (action.type === ADD_POST) {
            const newPost = {
                id: new Date().getTime(),
                message: action.message,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._renderEntireTree()
        } else if (action.type === CHANGE_NEW_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._renderEntireTree()
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            this._renderEntireTree()
        } else if (action.type === SEND_MESSAGE) {
            const body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({id: 7, message: body})
            this._renderEntireTree()
        }
    }
}

export const addPostActionCreator = (message:string) => {
    return {
        type: 'ADD-POST',
        message:message
    } as const
}

export const changeNewTextActionCreator = (newText:string) => {
    return {
        type: 'CHANGE-NEW-TEXT',
        newText:newText
    } as const
}//обновить тело нового сообщения - перевод

export const updateNewMessageBodyCreator = (body:string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
}
export const sendMessageCreator = () => ( {type: 'SEND-MESSAGE'} as const )












