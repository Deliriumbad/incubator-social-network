import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootStateReduxType} from "../../redux/redux-store";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type PathParamType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType
    isAuth: boolean
}

type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
}

type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamType> & ProfileContainerPropsType

export class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {

        let userId = this.props.match.params.userId
        if(!userId){
            userId = '8'
        }
        this.props.getUserProfile(userId)
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const AuthRedirectComponent = withAuthRedirect(ProfileContainer)
    /*(props:any) => {
    if(!props.isAuth) return <Redirect to={'/login'} />
    return <ProfileContainer {...props} />
}*/

const mapStateToProps = (state: RootStateReduxType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateReduxType>
(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)
