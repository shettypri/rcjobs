import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProductReducers, placeOrderReducer} from "../../App/Slice/BuyProductSlice.js";
import { useNavigate} from "react-router-dom";

const BuyList = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProductReducers())
    }, []);
    const {getProduct} = useSelector(state => state.ProductReducer)
    return (
        <>
            <div
                className="flex justify-center flex-col "
            >
                <div className="flex flex-row bg-orange-400 px-4 w-full py-3 mt-2 justify-center
                 max-sm:w-full
                 ">
                    <div className="mx-4">
                        <button className="text-2xl  text-white border-2 border-white px-4
                        rounded-full py-1 shadow shadow-white
                        max-sm:text-xl max-sm:px-6
                        "
                        onClick={()=>
                            navigate("/admin/dashboard")
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

                <div className="w-full ">
                    <table className="w-full">
                        <tr className="mx-2">
                            <th className="border-2 border-black px-3 py-1 uppercase">Sl no</th>
                            <th className="border-2 border-black px-3 py-1 uppercase">Customer name</th>
                            <th className="border-2 border-black px-3 py-1 uppercase">Client name</th>
                            <th className="border-2 border-black px-3 py-1 uppercase">Ads Name</th>
                            <th className="border-2 border-black px-3 py-1 uppercase">Contact</th>
                            <th className="border-2 border-black px-3 py-1 uppercase">Response</th>
                        </tr>
                        {
                            getProduct.Success &&
                            getProduct.data.map((product, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="border-2 border-black px-7 py-2 uppercase font-bold">{index + 1}</td>
                                            <td className="border-2 border-black px-7 py-2 uppercase font-bold">{product.userName}</td>
                                            <td className="border-2 border-black px-7 py-2 uppercase font-bold">{product.clientName}</td>
                                            <td className="border-2 border-black px-7 py-2 uppercase font-bold">{product.adsName}</td>
                                            <td className="border-2 border-black px-7 py-2 uppercase font-bold">+{product.Phone}</td>
                                            <td className="border-2 border-black pl-10 py-2 uppercase font-bold">
                                                <button
                                                    className="uppercase bg-green-600 px-4 pl-10 py-2 pr-10 rounded-full text-white border-2 border-black"
                                                    onClick={() => {
                                                        dispatch(placeOrderReducer(product.id))
                                                        dispatch(getProductReducers())
                                                    }}
                                                >Placed
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                }
                            )
                        }
                    </table>
                </div>

            </div>

        </>
    );
}

export default BuyList;