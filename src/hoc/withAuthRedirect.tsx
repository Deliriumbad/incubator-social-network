import {Redirect} from "react-router-dom";
import React from "react";
import {RootStateReduxType} from "../redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: RootStateReduxType): MapStatePropsType => {
  return {
      isAuth: state.auth.isAuth
  }
}


export const withAuthRedirect = (Component:any) => {
    class RedirectComponent extends React.Component<any, any> {
        render() {
            if(!this.props.isAuth) return <Redirect to='/login' />
                return <Component {...this.props} />
        }
    }

return RedirectComponent

}

/*
export function withAuthRedirect <T>(Component: ComponentType<T>) {
    function RedirectComponent(props: MapStatePropsType) {

        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to='/login'/>
        return <Component {...restProps as T} />
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent

}*/
