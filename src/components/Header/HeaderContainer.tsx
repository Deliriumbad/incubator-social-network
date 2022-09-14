import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";
import {RootStateReduxType} from "../../redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean
    login: string
}

type MapDispatchPropsType = {
    getAuthUserData: () => void
}
export type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

export class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
       this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: RootStateReduxType): MapStatePropsType => ({
        isAuth: state.auth.isAuth,
        login: state.auth.login
    })

export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateReduxType>
(mapStateToProps, {getAuthUserData})(HeaderContainer)