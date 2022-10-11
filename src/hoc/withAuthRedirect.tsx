import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {RootStateReduxType} from "../redux/redux-store";
import {connect} from "react-redux";

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: RootStateReduxType): MapStatePropsType => {
  return {
      isAuth: state.auth.isAuth
  }
}

export function withAuthRedirect <T>(Component: ComponentType<T>) {
    function RedirectComponent(props: MapStatePropsType) {

        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to='/login'/>
        return <Component {...restProps as T} />
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent
}


/*export const withAuthRedirect = (Component:any) => {
    class RedirectComponent extends React.Component<any, any> {
        render() {
            if(!this.props.isAuth) return <Redirect to='/login' />
                return <Component {...this.props} />
        }
    }

    let ConnectedAuthRedrectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

return RedirectComponent

}*/
/*let mapStateToPropsForRedirect = (state: RootStateReduxType): mapStateToPropsForRedirectType => ({
    isAuth: state.auth.isAuth
})*/
/*type mapStateToPropsForRedirectType = {
    isAuth: boolean
}*/
