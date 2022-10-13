import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RootStateReduxType} from "../../redux/redux-store";
import {getUserProfile, getUserStatus, ProfileType, updateUserStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type PathParamType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType
    isAuth?: boolean
    status: string
}

type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
}

type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamType> & ProfileContainerPropsType

export class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {

        let userId = Number(this.props.match.params.userId)
        if (!userId) {
            userId = 24652
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {

        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}
            />
        )
    }
}

const mapStateToProps = (state: RootStateReduxType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

/*let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default withAuthRedirect(connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateReduxType>
(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent))*/

export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateReduxType>
    (mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    //withAuthRedirect-иначе при обновлении сразу попаданем на логинизацию
)(ProfileContainer)