
import PaymentInfo from "../Company_Bank_Details/Payment_Info"
import testimg from "../../assets/Images/user.png"
import { useState } from "react"
import AffiliatePayment from "./AffilatePayment"




const ProductPreview = () => {
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <div className="w-full flex flex-row justify-around max-sm:flex-col">

        <div className="w-1/2 flex-col">
          <img src={testimg} alt="" width={400} height={20} className="mx-auto w-2/4 "></img>
          <section className="font-bold text-xl ml-8 py-3 max-sm:text-sm ">
            Product Name :
          </section>
          <section className="font-bold text-xl ml-8 py-3 max-sm:text-sm">
            Product Price :
          </section>
          <div>
            <input
              type="file"
              name="name"
              accept="image/*"
              className=" mt-1 flex justify-center p-3 space-y-3 "
            />
          </div>

        </div>

        <div className="flex flex-col ">
          <div>
            <PaymentInfo />
          </div>
          <div className="flex flex-row py-4 my-4 px-2 " >
            <div className="">
              <button className="text-white capitalize bg-red-500 ml-7 py-2 rounded-md px-10  border-2 hover:border-red-800 font-semibold "
                onClick={() => setShowForm(false)}
              > Cancel </button>
            </div>
            <div className="">
              <button className="text-white capitalize bg-green-500 ml-7 py-2 rounded-md px-10  border-2 hover:border-green-800 font-semibold "
                onClick={() => setShowForm(true)}
              >
                Proceed </button>
            </div>
          </div>
        </div>
      </div>
      {
        showForm && <AffiliatePayment />
      }



    </>


  )
}

export default ProductPreview