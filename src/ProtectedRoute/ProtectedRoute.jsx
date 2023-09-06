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
    // console.log("Exppriment Route")

    if (isAuthorised === true && isBlocked === false) {
        return <Outlet/>
    }
    if (isAuthorised === true && isBlocked === true) {
        return <Navigate to="user/blockpage"/>
    }
    return (<Navigate to={'/user/waiting'}/>)
}

export const RegisterRoute = ({isNewUser}) => {
    if (isNewUser === true)
        return <Outlet/>
        // return <Navigate to="/user/register"/>
    // return <Navigate to={'/user/register'}/>
    return <Navigate to="/user/userdashboard"/>
}

export const BlockUserRoute = ({isBlocked}) => {
    if (isBlocked) {
        return <Navigate to={"user/blockpage"}/>
    }
}
export default {ProtectedLoginRoute, AdminRoute, UserRoute, RegisterRoute, BlockUserRoute};
