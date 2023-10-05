import {  useState } from "react"
import AffliateBuy from "./AffliateBuy"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { isLogOutReducers } from "../../App/Slice/userSlice"


const LoggedInUser = ({ data }) => {
  const userData = {
    id:data.id,
    name: data.name,
    address: data.Address,
    cust_Phone: data.phone,
    Pincode: data.PinCode,
  }

  const referLinkRewardID = sessionStorage.getItem("affiliateLinkReward")
  // console.log("{}{}{}{}{}{}",data.id);
  const navigate = useNavigate()
  const [paymentFile, setPaymentFile] = useState(null)


  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(isLogOutReducers())
  }

  return (
    <div className="flex flex-col mx-auto my-4 mb-4 border border-orange-700 py-10 px-10">
      {
        data.id === referLinkRewardID ? (
          <>
            <div>
              <section className="font-bold capitalize mb-4">
                You cannot refer to your self
              </section>
            <div className="flex flex-row justify-between">
              <button 
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black hover:border border-gray-800"
              onClick={handleLogout}
              >
                Logout
              </button>
              <button 
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black hover:border border-gray-800"
              onClick={()=>navigate("/user/userdashboard")}
              >
                Dashboard
              </button>
            </div>
            </div>

          </>
        ) : (
          <>
            <section className="mx-2 font-semibold capitalize">
              hello ,welcome back
              <section className="mx-4 font-extrabold">
                {data.name}
              </section>
            </section>
            <section className="flex flex-col">
              <label>
                Please update the payment proof
              </label>
              <input
                type="file"
                name="name"
                onChange={(e) => setPaymentFile(e.target.files[0])}
                accept="image/*"
                className=" mt-1 flex justify-center p-3 space-y-3 "
              />
            </section>

            <div>
              <AffliateBuy userData={userData} isAnonymous={false} paymentFile={paymentFile} />
            </div>
          </>
        )
      }
    </div>
  )
}

export default LoggedInUser
