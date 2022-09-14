import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootStateReduxType} from "../../redux/redux-store";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType
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

const mapStateToProps = (state: RootStateReduxType): { profile: ProfileType } => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateReduxType>
(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)
