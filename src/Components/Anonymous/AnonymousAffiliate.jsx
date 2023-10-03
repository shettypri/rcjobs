
import {useState} from "react";
const AnonymousAffiliate = () => {
    

const [anonymousUser, setAnonymousUser] = useState({
    name:"",
    address:"",
    phone:"",
    pincode:""

})
const [paymentImage, setPaymentImage] = useState(null)

 const [errorMessage, setErrorMessage] = useState(false)



    const handleNumberInput=(event)=>{
        const re=/^[0-9]+$/;
        if ((event.target.value === "" || re.test(event.target.value))) {
            setAnonymousUser({
                ...anonymousUser, [event.target.name]: event.target.value
            })
            

        }
    }

    const handleNameInput=(event)=>{
        const re=/^[a-zA-Z_ ]+$/;
        if ((event.target.value === "" || re.test(event.target.value))) {
            setAnonymousUser({
                ...anonymousUser, [event.target.name]: event.target.value
            })

        }
    }
    const handleAnonymousValue=(event)=>{
        setAnonymousUser({
            ...anonymousUser, [event.target.name]: event.target.value
        })
        
    }

   const handleValues =()=>{
    if(anonymousUser.name.length===0 ||anonymousUser.address.length===0 || anonymousUser.phone.length===0 ||anonymousUser.pincode.length===0   ){
        setErrorMessage(true)

    }
    else{
        //
    }
  
   }
   



    return (
        <>
            <form className="ml-48 mt-4 p-3 w-1/2 max-sm:w-72 max-sm:ml-4 max-sm:px-0 bg-white  rounded-md shadow-md mx-auto">
                <div className="ml-48 w-3/4 border-black p-3 max-sm:ml-4  flex flex-col">
                    <label className="block text-lg font-semibold text-black" >
                        Name
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="text"
                            name="name"
                            value={anonymousUser.name}
                            onChange={handleNameInput}
                            className="block w-8/12 max-sm:w-56 px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        />
                        { errorMessage && anonymousUser.name.length===0 && (<label className={"text-red-800 italic font-bold"}>please enter full
                                            name</label>)}
                    </div>
                    <label className="block text-lg font-semibold text-black" >
                        Phone number
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="text"
                            name="phone"
                            value={anonymousUser.phone}
                            onChange={handleNumberInput}
                            maxLength={10}
                            className="block  w-8/12 max-sm:w-56  px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        />
                        { errorMessage && anonymousUser.phone.length===0 && (<label className={"text-red-800 italic font-bold"}>please enter phone number</label>)}
                    </div>
                    <label className="block text-lg font-semibold text-black" >
                        Address
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="text"
                            name="address"
                            value={anonymousUser.address}
                            onChange={handleAnonymousValue}
                            
                            className="block  w-8/12 max-sm:w-56  px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        />
                        { errorMessage && anonymousUser.address.length===0 && (<label className={"text-red-800 italic font-bold"}>please enter the address</label>)}

                    </div>
                    
                    <label className="block text-lg font-semibold text-black" >
                        Pin Code
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="text"
                            name="pincode"
                            value={anonymousUser.pincode}
                            onChange={handleNumberInput}
                            className="block  w-8/12 max-sm:w-56 px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        />
                        { errorMessage && anonymousUser.phone.length===0 && (<label className={"text-red-800 italic font-bold"}>please enter Pincode</label>)}
                    </div>

                    <div className=" font-semibold text-black   h-[250px] py-3   ">
                        <h1 className="text-lg ">Payment details</h1>
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            className=" mt-1 flex justify-center p-3 space-y-3 "
                            onChange={(event)=>{
                               setPaymentImage(event.target.files[0])

                            }} />

                    </div>
                    <div className="-mt-36 ml-14">
                    <button className=" text-center font-semibold border-1  text-white  rounded-lg w-[110px] h-[30px] bg-blue-700 " onClick={()=>{handleValues}}> submit</button>
                    </div>



                   

                </div>

            </form>


        </>
    )



}

export default AnonymousAffiliate