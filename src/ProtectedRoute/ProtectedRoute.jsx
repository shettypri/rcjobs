import {Navigate, Outlet} from "react-router-dom";


export const ProtectedLoginRoute = ({isLoggedIn}) => {
    console.log("public route", isLoggedIn)
    if (isLoggedIn === false || isLoggedIn === undefined)
        return (<Navigate to={"/"}/>)
    // return children?children:<Outlet/>
    return <Outlet/>
}
export const AdminRoute = ({isAdmin}) => {
    console.log("admin Route", isAdmin)
    if (isAdmin === false) {
        return (<Navigate to={"/"}/>)
    }
    return <Outlet/>

}
export const UserRoute = ({isAdmin, newUser}) => {
    console.log("user route", isAdmin)
    console.log("==> new user in user route", newUser)

    if (isAdmin === false || newUser === true)
        return <Outlet/>
    if (isAdmin === undefined)
        return (<Navigate to={"/"}/>)

}
export const AuthUserRoute = ({isAuthorised})=>{
    console.log("Exppriment Route")
    if(isAuthorised === true){
        return <Outlet />
    }
    return (<Navigate to={'/user/waiting'}/>)
}

export const RegisterRoute = ({isUserAuthorized}) =>{
    if(!isUserAuthorized)
        return <Navigate to={"/user/register"}/>
    return <Navigate to="'/user/userdashboard"/>
}
export default {ProtectedLoginRoute, AdminRoute, UserRoute,RegisterRoute};
