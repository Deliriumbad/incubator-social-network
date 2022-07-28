import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateReduxType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";


type MapStatePropsType = {
    profile: ProfileType
}

type MapDispatchPropsType = {
    setUserProfile: (data: ProfileType) => void
}

type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType

export class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((res) => {
                console.log(res)
                this.props.setUserProfile(res.data)

            });
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

export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateReduxType>
(mapStateToProps, {setUserProfile})(ProfileContainer)
