import {combineReducers, legacy_createStore as createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";




let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
});

export let store = createStore(reducers);

// типизация state всего приложения
export type RootStateReduxType = ReturnType<typeof reducers>

// типизация store всего приложения
export type RootStoreType = typeof store
