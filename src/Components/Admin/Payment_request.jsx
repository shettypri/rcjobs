const Payment_request = () => {
    const handlePayment = ()=>{

    }
    return (
        <>
            <div className="flex flex-col items-center m-auto mt-4 w-full">
               <div className="border-2 border-red-700 py-3 px-40 rounded bg-yellow-600 ">
                   <h1 className="font-bold text-white uppercase">
                        Payment request
                   </h1>
               </div>

                <div className="my-4 w-auto  border border-red-700">
                    <table className="">
                        <tr className="border border-b-black  ">
                            <th className="mx-2 px-6 font-bold uppercase bg-gray-200 py-3 ">
                                SL NO
                            </th>
                            <th className="mx-2 px-6 font-bold uppercase bg-gray-200 py-3">
                                name
                            </th>
                            <th className="mx-2 px-6 font-bold uppercase bg-gray-200 py-3">
                                Amount
                            </th>
                            <th className="mx-2 px-6 font-bold uppercase bg-gray-200 py-3">
                                Response
                            </th>
                        </tr>
                        <tr className="">
                            <td className="mx-2 px-6 py-4">
                                1
                            </td>
                            <td className="mx-2 px-6">
                                User1
                            </td>
                            <td className="mx-2 px-6">
                                250
                            </td>
                            <td className="mx-2 px-6  group">
                                <button className="bg-green-500 text-white font-bold uppercase px-10 py-2 rounded-full border-2 border-gray-700 group-hover:bg-white group-hover:text-green-500"
                                onClick={()=>handlePayment}
                                >
                                    Paid
                                </button>
                            </td>

                        </tr>
                    </table>
                </div>

            </div>
        </>
    )
}

export default Payment_request