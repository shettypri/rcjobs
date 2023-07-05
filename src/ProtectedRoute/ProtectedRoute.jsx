// import {Navigate, Outlet} from "react-router-dom";

const ProtectedRoute = 44
//     ({
//     isLogedIn,children,isAdmin,isUserAuthrized
// })=>{
//     if(!(isLogedIn)){
//         return <Navigate to={"/"}/>
//     }
//     if(!isAdmin){
//         return  <Navigate to={"/user/userdashboard"}/>
//     }
//     if(!(isUserAuthrized)){
//         return  <Navigate to={"/user/waiting"}/>
//     }
//     return children ? children : <Outlet />;
// }

export default ProtectedRoute;