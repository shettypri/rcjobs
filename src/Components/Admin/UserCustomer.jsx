import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCustomerReducers} from "../../App/Slice/AdminCustomerSlice.js";

const UserCustomer = () =>{
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCustomerReducers())
    }, []);
    const {customerUser} = useSelector(state => state.CustomerReducers)

    console.log(customerUser)
    return(
        <>
           <table className="w-1/3  border-2 border-black">
               <tbody>
               <tr>
                   <th>Name</th>
                   <th>Address</th>
                   <th>Phone No</th>
                   <th>Action</th>
               </tr>
               </tbody>
           </table>
        </>

    );
}

export default UserCustomer;