import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootStateReduxType} from "../../redux/redux-store";
import {Dispatch} from "redux";


type MapStatePropsType = {
    state: RootStateReduxType
    isAuth: boolean
}

type MapDispatchPropsType = {
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
}

const mapStateToProps = (state: RootStateReduxType): MapStatePropsType => {
    return {
        state: state,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

export const DialogsContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateReduxType>(mapStateToProps, mapDispatchToProps)(Dialogs);