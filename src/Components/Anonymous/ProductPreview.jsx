
import PaymentInfo from "../Company_Bank_Details/Payment_Info"
import testimg from "../../assets/Images/user.png"
import { useEffect, useState } from "react"
import AffiliatePayment from "./AffilatePayment"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getAdsAnonymousReducers } from "../../App/Slice/AnonymousSlice"



const ProductPreview = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const SplitArray = params.codelink.split('NICOZN')
  const { userId, adsId } = { userId: SplitArray[0], adsId: SplitArray[1] }

  sessionStorage.setItem("affiliateLinkReward", userId)

  useEffect(() => {
    console.log(adsId);
    dispatch(
      getAdsAnonymousReducers(adsId)
    )
  }, [])


  // console.log(userId);
  const { getAdsState } = useSelector(state => state.AnonymousReducer)
  const adsData = getAdsState.data
  console.log(adsData);
  // console.log(getAdsState);
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <div className="w-full flex flex-row justify-around max-sm:flex-col">

        <div className="w-1/2 flex-col">
          <img src={adsData.imageURL} alt="" width={400} height={20} className="mx-auto w-2/4 "></img>
          <section className="font-bold text-xl ml-8 py-3 max-sm:text-sm flex flex-row justify-evenly">
            <section>Product Name</section>
            <section>{adsData.Ads_name}</section>
          </section>
          <section
            className="font-bold text-xl ml-8 py-3 max-sm:text-sm flex flex-row justify-evenly">
            <section>Product Price :</section>
            <section className={adsData.Ads_Offer !== 0 ? "text-gray-700 line-through" : "text-gray-900"}>
              {adsData.Ads_price}
            </section>
          </section>
          <section
            className={adsData.Ads_Offer !== 0 ? "font-bold text-xl ml-8 py-3 max-sm:text-sm flex flex-row justify-evenly" : "hidden"}>
            <section>Offer Price :</section>
            <section>
              {Number(adsData.Ads_price) - (Number(adsData.Ads_price) / 100) * (Number(adsData.Ads_Offer))}
            </section>
          </section>

        </div>

        <div className="flex flex-col ">
          <div>
            <PaymentInfo />
          </div>
          <div className="flex flex-row py-4 my-4 px-2  max-sm:-ml-7" >
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