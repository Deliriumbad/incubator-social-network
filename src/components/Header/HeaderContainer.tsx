import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AuthMeDataType, setAuthUserData} from "../../redux/auth-reducer";
import {RootStateReduxType} from "../../redux/redux-store";


type AuthMeMessagesType = {
    messages: Array<string>
}

type AuthMeFieldsErrorsType = {
    fieldsErrors: Array<string>
}

type MapStatePropsType = {
    // data: AuthMeDataType
    // messages: AuthMeMessagesType,
    // fieldsErrors: AuthMeFieldsErrorsType,
    // resultCode:number
    isAuth: boolean
    login: string
}

type MapDispatchPropsType = {
    setAuthUserData: (data: AuthMeDataType) => void
}

export type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

export class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then((res) => {
                if (res.data.resultCode === 0) {
                    this.props.setAuthUserData(res.data.data.login)
                }
                console.log(res)
            });
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
(mapStateToProps, {setAuthUserData})(HeaderContainer)