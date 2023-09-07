import {Navigate, Outlet, Route} from "react-router-dom";
import Waiting from "../Components/Users/Waiting.jsx";


export const ProtectedLoginRoute = ({isLoggedIn}) => {
    // console.log("public route", isLoggedIn)
    if (isLoggedIn === false || isLoggedIn === undefined)
        return (<Navigate to={"/"}/>)
    // return children?children:<Outlet/>
    return <Outlet/>
}
export const AdminRoute = ({isAdmin}) => {
    // console.log("admin Route", isAdmin)
    if (isAdmin === false) {
        return (<Navigate to={"/"}/>)
    }
    return <Outlet/>

}
export const UserRoute = ({isAdmin, newUser}) => {
    // console.log("user route", isAdmin)
    // console.log("==> new user in user route", newUser)

    if (isAdmin === false || newUser === true)
        return <Outlet/>
    if (isAdmin === undefined)
        return (<Navigate to={"/"}/>)

}
export const AuthUserRoute = ({isAuthorised, isBlocked}) => {
    if(isBlocked === true){
        if (isAuthorised === true){
            return <Navigate to="user/blockpage"/>
        }
    }else{
        if (isAuthorised === true){
            return <Outlet/>
        }else{
            return (<Navigate to={'/user/waiting'}/>)
        }
    }

    if (isAuthorised === true && isBlocked === false) {

    }


}

export const RegisterRoute = ({isNewUser,isAuthorised}) => {
    console.log("register Page",isNewUser)
    console.log("Authorised Page",isAuthorised)
    if(isAuthorised === true ){
        return <Navigate to="/user/userdashboard"/>
    }
    if (isNewUser === true )
        return <Outlet/>

}

export const BlockUserRoute = ({isBlocked}) => {
    if (isBlocked === true) {
        return <Outlet/>
    }
}

export const WaitingUserRoute = ({isAuthorised}) => {
    console.log("Waiting Route", isAuthorised)
    if (isAuthorised) {
        return <Navigate to="/user/userdashboard"/>
    }
    return <Outlet/>

}
export default {ProtectedLoginRoute, AdminRoute, UserRoute, RegisterRoute, BlockUserRoute, WaitingUserRoute};
