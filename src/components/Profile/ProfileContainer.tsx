import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateReduxType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";


type MapStatePropsType = {
    profile: ProfileType
}

type MapDispatchPropsType = {
    setUserProfile: (data: ProfileType) => void
}

type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType

export class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
       debugger
        let userId = this.props.router.params.userId
        axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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

function withRouter(ProfileContainer:any) {
    function ComponentWithRouterProp(props:any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <ProfileContainer
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateReduxType>
(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer))
