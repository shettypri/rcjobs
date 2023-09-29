import { useSelector } from "react-redux"



const HistoryTansaction = () => {
    const { data } = useSelector(state => state.userReducer)
    // console.log(data.transationAmount);
    const transactionInfo = data.transationAmount
    // console.log(transactionInfo);
    // console.log("hello->");
    const timeStampToDate = (timeStamp) => {
        // console.log(timeStamp);
        timeStamp

        const milliseconds = timeStamp.seconds * 1000;

        // Create a Date object
        const date = new Date(milliseconds);
        // Get the human-readable date format
        return date.toLocaleString().split(",")[0];

    }
    return (
        <div>
            <table className="w-11/12 border-2  mx-auto max-sm:text-[15px] capitalize">

                <thead>
                    <tr className="border-2">
                        <td className="w-2/12 text-center">SI NO</td>
                        <td className="w-2/12 text-center">Date</td>
                        <td className="w-2/12 text-center">Total Amount</td>
                        <td className="w-2/12 text-center">Taxes</td>
                        <td className="w-2/12 text-center">Earned Amount</td>
                    </tr>
                </thead>

                <tbody>
                    {
                        transactionInfo.length > 0 &&
                        transactionInfo.map((item, index) => {
                            return (
                                <tr key={index} className="border border-b ">
                                    <td className="w-2/12 text-center">{index + 1}</td>
                                    <td className="w-2/12 text-center">
                                        {/* {item.timeStamp.toLocaleDateString()} */}
                                        {
                                            timeStampToDate(item.timeStamp)
                                        }

                                    </td>
                                    <td className="w-2/12 text-center">{item.totalAmount}</td>
                                    <td className="w-2/12 text-center">
                                        <section className="my-2">tds 5%</section>
                                        <section className="my-2"> Process Fee 5%</section>
                                    </td>
                                    <td className="w-2/12 text-center">{item.paymentAmount}</td>
                                </tr>
                            )
                        }
                        )}
                        <tr className="">
                            <td className="col-span-5" colSpan={4}>
                                <section className="my-2  text-right font-bold">Total Amount</section>
                            </td>
                            <td colSpan={1}>
                                <section className="my-2 font-bold col-end-7 text-center" aria-colspan={3}>{data.Total_withdrawal}</section>
                            </td>
                        </tr>


                    



                </tbody>



            </table>

        </div>
    )
}

export default HistoryTansaction
