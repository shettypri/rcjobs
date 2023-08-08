import {useNavigate, useParams} from "react-router-dom";


const Refer = () => {
    const navigate = useNavigate()
    const params = useParams()

    /* The line `const refferalLink = params.refer` is extracting the value of the `refer` parameter
    from the URL. It is using the `useParams` hook from the `react-router-dom` library to access the
    URL parameters. The extracted value is then stored in the `refferalLink` variable. */
    const refferalLink = params.refer

    /* `sessionStorage.setItem("referCode", refferalLink)` is setting a value in the sessionStorage
    object. The value is stored under the key "referCode" and its value is the value of the
    `refferalLink` variable. */
    sessionStorage.setItem("referCode", refferalLink)

   /**
    * The function `goToLogin` logs the value of `refferalLink` to the console and then navigates to
    * the home page ("/").
    */
    const goToLogin = () => {
        console.log(refferalLink)
        navigate("/")
    }


    return (
        <>
        <div className="flex  mx-auto justify-center items-center h-full py-44
        max-sm:py-52
        ">
            <div className="flex flex-col px-44 border-2 border-white py-20 rounded
            max-sm:py-4 max-sm:px-14
            ">
                <label className="font-bold my-4 capitalize

                ">Thank you for joining through referral program</label>
                <button onClick={goToLogin}
                        className="border border-black px-0 rounded-full py-4 bg-gray-400 uppercase w-1/2 mx-24
                        font-bold hover:bg-gray-500 hover:text-white
                        max-sm:py-2 max-sm:w-1/2 max-sm:mx-20
                        ">
                    login page
                </button>
            </div>
        </div>
        </>


    )
}

export default Refer