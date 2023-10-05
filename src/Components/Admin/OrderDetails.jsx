import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProductReducers, placeOrderReducer } from "../../App/Slice/BuyProductSlice.js";
import { useLocation, useNavigate } from "react-router-dom";
import rewardForAffiliate from "../../Services/admin_service/Afflicate/rewardForAffilate.js";
import Loader2 from "../Global/Loader2.jsx";
import ErrorText from "../Global/Affliate/ErrorText.jsx";
import SuccessText from "../Global/Affliate/SucessText.jsx";


export const OrderDetails = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProductReducers())
    }, []);
    const { getProduct } = useSelector(state => state.ProductReducer)
    const { orderPlaced } = useSelector(state => state.ProductReducer)
    const { loading, Error, Success } = orderPlaced
    // console.log(loading, Error, Success)
    // console.log(getProduct.data)
    const location = useLocation()
    const data = location.state.product
    // console.log(data.affiliatePercentage)
    const navigate = useNavigate()

    const [error, setError] = useState(false)
    const [sucess, setSucess] = useState(false)

    const handlePlaceOrder = async () => {
        setError(false)
        setSucess(false)
        try {
            dispatch(placeOrderReducer(data.id))
            if (data.isAffiliated) {
                // if()
                const rewardToGiveId = data.suggestLinkUserId
                const amount = (Number(data.actual_price) / 100) * data.affiliatePercentage
                rewardForAffiliate(rewardToGiveId, amount)
            }
            dispatch(getProductReducers())
            setSucess(true)
        } catch (err) {
            setError(true)
        }
    }


    return (
        <>

            <div className="flex justify-center flex-col">

                <div className="flex flex-row bg-orange-600 px-4 w-full py-3 mt-2 justify-center
                 max-sm:w-full
                 ">
                    <div className="mx-4">
                        <button className="text-2xl  text-white border-2 border-white px-6  mr-28
                        rounded-full py-1 shadow shadow-white
                        max-sm:text-xl max-sm:px-6 max-sm:mr-14
                        "
                            onClick={() =>
                                navigate("/admin/order")
                            }>
                            &#x1F878;
                        </button>
                    </div>
                    <div className="px-40
                    max-sm:px-5
                    ">
                        <h1 className="text-white font-bold uppercase text-3xl  px-4 py-2

                        max-sm:text-xl
                        ">
                            Order List
                        </h1>
                    </div>
                </div>
            </div>

            <div className=" flex flex-row  mx-auto gap-10 " >
                <div className="flex flex-col px-4 py-8">
                    <div className=" font-bold text-black px-10  ">

                        <h1 className=" text-xl py-2">Customer Detail</h1>
                        <div className="flex flex-row ">
                            <section className="px-7">
                                <h1 className=" py-6">Name : {data.userName}</h1>
                                <h1 className=" py-6">Address : {data.address}</h1>
                            </section>

                            <section className="px-7" >
                                <h1 className=" py-6">Phone : {data.Phone}</h1>
                                <h1 className=" py-6">Product Name : {data.adsName}</h1>

                            </section>
                        </div>

                        <div>
                            <section className="font-bold text-xl py-4 px-16 "> Actual Price &#8377; : {data.actual_price}</section>
                            <section className="font-bold text-xl py-4 px-16 ">Discount % : {data.offer}</section>
                            <section className="font-bold text-xl py-2 px-16 box-border border-4  ">Paid Price &#8377; : {data.paid_price}</section>

                        </div>

                    </div>

                    <div className=" font-bold text-black px-10  ">

                        <img className="py-4"
                            src={data.ProductUrl} alt={""} height={550} width={400} />

                    </div>
                </div>

                <div className="flex flex-col">
                    <div className=" font-bold text-black px-10  h-[250px] py-8    ">
                        <h1 className="text-xl ">Payment details</h1>
                        <img className="py-4"
                            src={data.paidUrl} alt={""} height={650} width={600} />

                    </div>

                    <div className=" flex justify-end mr-12 py-80 flex-col">
                        {loading && <Loader2 />}
                        {error && <ErrorText text={"Order Not Placed"} />}
                        {sucess && <SuccessText text={"Order Placed"} />}
                        <button className=" font-bold to-emerald-100 bg-green-600 rounded-lg  text-white py-3 px-4 capitalize text-xl hover:bg-green-950 mt-10 w-1/2 mx-auto"
                            onClick={handlePlaceOrder}
                            disabled={loading}
                        >
                            place order
                        </button>
                    </div>
                </div>

            </div>





        </>
    )
}