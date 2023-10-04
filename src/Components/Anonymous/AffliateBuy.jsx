import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductReducers } from "../../App/Slice/BuyProductSlice";
import uploadPayment from "../../Services/anonymous/uploadPayment";


const AffliateBuy = ({ userData, isAnonymous, paymentFile }) => {
  const [buyBtnClick, setBuyBtnClick] = useState(false)

  const { getAdsState } = useSelector(state => state.AnonymousReducer)
  const adsData = getAdsState.data

  const dispatch = useDispatch()

  const referLinkRewardID = sessionStorage.getItem("affiliateLinkReward")

  const { name, address, cust_Phone, Pincode } = userData

  const [buyData, setBuyData] = useState({
    name: name,
    address: address,
    cust_Phone: cust_Phone,
    Pincode: Pincode,
    isAnonymous: isAnonymous,

    clientName: adsData.name,
    Phone: adsData.Phone,
    actual_price: adsData.Ads_price,
    paid_price: Number(adsData.Ads_price) - (Number(adsData.Ads_price) / 100) * (Number(adsData.Ads_Offer)),
    offer: adsData.Ads_Offer,
    ProductUrl: adsData.imageURL,
    paidUrl: "",

    order_date: new Date().toUTCString().slice(5, 16),
    order_Month: new Date().getMonth(),
    order_TimeStamp: new Date(),
    order_year: new Date().getFullYear(),

    isOrderPlaced: false,

    isAffiliated: true,
    suggestLinkUserId: referLinkRewardID
  })

  const placeOrderBtn = async () => {
    if (paymentFile === null) {
      alert("Please upload the payment proof")
      return
    } else {
      setBuyBtnClick(true)
      const imageUrl = await uploadPayment(paymentFile)
      buyData.paidUrl = imageUrl
      await dispatch(addProductReducers(buyData))
      console.log(buyData);

      setBuyBtnClick(false)
    }
  }




  return (

    <button className="bg-orange-600 px-16 py-2 mb-10 mx-auto flex rounded-lg"
      onClick={placeOrderBtn}
      disabled={buyBtnClick}
    >
      <section className="text-white font-bold">
        Buy
      </section>
    </button>
  )
}

export default AffliateBuy