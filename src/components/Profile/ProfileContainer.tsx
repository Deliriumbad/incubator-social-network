import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateReduxType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profile-reducer";

type GetResponseContactsType = {
    facebook: string
    website?: null
    vk: string
    twitter: string
    instagram: string
    youtube?: null
    github: string
    mainLink?: null
}

type GetResponsePhotosType = {
    small: string
    large: string
}

export type GetResponseType = {
    aboutMe: string
    contacts: GetResponseContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: GetResponsePhotosType
}

type MapStatePropsType = {
    profile: any
}

type MapDispatchPropsType = {
    setUserProfile: (data:any)=> void
}

type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType

export class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        axios.get<GetResponseType>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((res) => {
                this.props.setUserProfile(res.data)
                console.log(res.data)
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: RootStateReduxType): any => ({
    profile: state.profilePage.profile
})

export const ProfileCont = connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateReduxType>
(mapStateToProps, {setUserProfile})(ProfileContainer)
