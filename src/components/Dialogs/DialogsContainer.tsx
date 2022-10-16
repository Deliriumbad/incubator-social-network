import React from "react";
import {sendMessageCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootStateReduxType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStatePropsType = {
    state: RootStateReduxType
    isAuth?: boolean
}

type MapDispatchPropsType = {
    sendMessage: (newMessageBody: string) => void
}

const mapStateToProps = (state: RootStateReduxType): MapStatePropsType => {
    return {
        state: state,
       /* isAuth: state.auth.isAuth*/
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageCreator(newMessageBody));
        },
    }
}

export const DialogsContainer = compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateReduxType>
    (mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
