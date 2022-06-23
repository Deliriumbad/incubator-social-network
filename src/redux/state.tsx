import {profileReducer} from "./profile-reducer";
import {ActionsTypes, dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export type DialogsPropsType = {
    id: number
    name: string
}
export type MessagesPropsType = {
    id: number
    message: string
}
export type PostsPropsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePagePropsType = {
    posts: Array<PostsPropsType>
    newPostText: string
}
export type sidebarPropsType = {}
export type MessagesPagePropsType = {
    messages: Array<MessagesPropsType>
    dialogs: Array<DialogsPropsType>
    newMessageBody: string
}

export type StateRootPropsType = {
    profilePage: ProfilePagePropsType
    dialogsPage: MessagesPagePropsType
    sidebar: sidebarPropsType

}

export type StoreType = {
    _state: StateRootPropsType
    getState: () => StateRootPropsType
    _renderEntireTree: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

export const store: StoreType = {
    _state: {
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
        sidebar: {},
    },
    _renderEntireTree() {
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._renderEntireTree = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer({state: this._state.profilePage, action: action})
        this._state.dialogsPage = dialogsReducer({state: this._state.dialogsPage, action: action})
        this._state.sidebar = sidebarReducer({state: this._state.sidebar, action: action})

        this._renderEntireTree()
    }
}
















