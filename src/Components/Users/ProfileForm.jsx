import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLoginReducers, updateProfileReducer } from "../../App/Slice/userSlice";


const ProfileForm = () => {
    const dispatch = useDispatch()
    // const parentDivCss = "relative z-0 w-4/6 mb-6 group"
    const labelCss= "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    const inputClassCss = "--peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"

    const { error, data } = useSelector(state => state.userReducer)
    const [editing, setEditing] = useState(false);
    const [Loading, setLoading] = useState(true);
    
    const [formDetails, setFormDetails] = useState({
        id:data.id,
        name:data.name,
        phone:data.phone,
        Address:data.Address,
        PinCode:data.PinCode,
        Account_name: data.Account_name,
        Account_no: data.Account_no,
        Bank_name: data.Bank_name,
        Branch: data.Branch,
        ifsc_code: data.ifsc_code,
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDetails({
            ...formDetails,
            [name]: value
        })
    }
    const handleFormSubmit = () => {
        console.log(formDetails);
        setEditing(false);
        if(data.Address === formDetails.Address && data.PinCode === formDetails.PinCode && data.Account_name === formDetails.Account_name && data.Account_no === formDetails.Account_no && data.Bank_name === formDetails.Bank_name && data.Branch === formDetails.Branch && data.ifsc_code === formDetails.ifsc_code){
            alert("No changes made")
        }else{
            if(formDetails.Address === "" && formDetails.PinCode === "" && formDetails.Account_name === "" && formDetails.Account_no === "" && formDetails.Bank_name === "" && formDetails.Branch === "" && formDetails.ifsc_code === ""){
                console.log();
                alert("Please fill all the fields")
            }else{
                dispatch(updateProfileReducer(formDetails))
                dispatch(isLoginReducers(data.id))
            }
        }
    }

  return (
    
      <div className="border border-gray-100 px-6 py-7 shadow-lg shadow-gray-200">
        <div className="relative z-0 w-full mb-6 group">
          <input type="text" name="name"  className={labelCss}
          value={formDetails.name}
          disabled={true}
          
          required />
          <label htmlFor="floating_email" 
          className={inputClassCss}>Full Name</label>
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <input type="text" name="floating_email" id="floating_email" className={labelCss}
          placeholder="" 
          value={formDetails.phone}
            disabled={true}
          required />
          <label htmlFor="floating_email" 
          className={inputClassCss}>Phone number</label>
        </div>


        <div className="relative z-0 w-full mb-6 group">
          <input type="text" name="Address" className={labelCss}
          onChange={handleChange}
          placeholder="" required 
          value={formDetails.Address}
            disabled={!editing}
          />
          <label className={inputClassCss}>
            Address
            </label>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input type="text" name="PinCode"  className={labelCss} 
            onChange={handleChange}
            value={formDetails.PinCode}
            disabled={!editing}
            required />
            <label  className={inputClassCss}>
                Pincode
            </label>
          </div>
          </div>

        

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input type="text" name="Account_name" className={labelCss}
            value={formDetails.Account_name}
            onChange={handleChange}
            disabled={!editing}
            required />
            <label  className={inputClassCss}>Bank Name</label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input type="text" name="ifsc_code" 
            onChange={handleChange}
            className={labelCss}placeholder=" " 
            value={formDetails.ifsc_code}
            disabled={!editing}
            required />
            <label  className={inputClassCss}>IFSC code</label>
          </div>
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <input type="text" name="Account_name"  className={labelCss}
            value={formDetails.Account_name}
            onChange={handleChange}
            disabled={!editing} 
          required />
          <label 
          className={inputClassCss}>Account Holder Name as per Bank </label>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input type="text" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="Account_no"  className={labelCss}placeholder=" " 
            value={formDetails.Account_no}
            onChange={handleChange}
            disabled={!editing}
            required />
            <label htmlFor="floating_phone" className={inputClassCss}>
                Account Number
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input type="text" name="Branch"  className={labelCss}
            value={formDetails.Branch}
            onChange={handleChange}
            disabled={!editing}
            required />
            <label htmlFor="floating_company" className={inputClassCss}>Branch name</label>
          </div>
        </div>

        <div>
            <div className={editing?"hidden":"flex justify-end"}>
            <button 
         className="px-10 bg-blue-700 text-white py-2 rounded-lg capitalize font-bold mx-4"
         onClick={()=>{setEditing(true)}}
         >Edit</button>
            </div>
            <div className={editing?"flex justify-end":"hidden"}>

            <button className="px-10 bg-red-700 text-white py-2 rounded-lg capitalize font-bold mx-4 max-sm:px-8"
            onClick={()=>{setEditing(false)}}
            >
                cancel
            </button>
            <button className="px-10 bg-green-700 text-white py-2 rounded-lg capitalize font-bold mx-4 max-sm:px-8"
            onClick={handleFormSubmit}
            >
                Submit
            </button>
                </div>    
        </div>     
       
      </div>
    
  )
}

export default ProfileForm
