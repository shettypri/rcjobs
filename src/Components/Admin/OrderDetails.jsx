import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProductReducers, placeOrderReducer} from "../../App/Slice/BuyProductSlice.js";
import {useLocation, useNavigate} from "react-router-dom";


export const OrderDetails = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProductReducers())
    }, []);
    const {getProduct} = useSelector(state => state.ProductReducer)
    // console.log(getProduct.data)
    const location = useLocation()
    const data = location.state.product
    // console.log(data)
    const navigate=useNavigate()






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
                            onClick={()=>
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
                             src={data.ProductUrl} alt={""} height={550} width={400}/>

                    </div>
                </div>

                <div className="flex flex-col">
                    <div className=" font-bold text-black px-10  h-[250px] py-8    ">
                        <h1 className="text-xl ">Payment details</h1>
                        <img className="py-4"
                             src={data.paidUrl} alt={""} height={650} width={600} />

                    </div>

                    <div className=" flex justify-end mr-12 py-80">
                        <button className=" font-bold to-emerald-100 bg-green-700 rounded-3xl py-3 px-6 capitalize text-xl hover:bg-green-950" onClick={()=>{
                            {
                                dispatch(placeOrderReducer(data.id))
                                dispatch(getProductReducers())

                            }}
                        }
                        >place order</button>
                    </div>
                </div>




            </div>





        </>
    )
}