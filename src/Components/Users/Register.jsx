const Register = () => {
  return (
    <>
        <div className={"flex flex-wrap justify-center mt-4 w-{48} h-auto border-3"}>

           <div className={"flex flex-col space-y-3 p-6 bg-white rounded-lg shadow-xl"}>
               <div className={"  text-2xl font-semibold"}>Registration Form</div>
               <div className={"text-black "}>Enter Full Name</div>
               <input
                   type="text"
                   name="name"
                   className=" mt-1 border-black-700 rounded-md drop-shadow-xl focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "/>

               <div>Enter Payment Proof</div>
               <div className="">
                   <input
                       type="file"
                       name="name"
                       accept="image/*"
                       className=" mt-1 border-black-700 rounded-md drop-shadow-xl focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "
                   />
               </div>
               <div className={"p-6"}>
                   IF NOT PAID YET <span className={"italic text-blue-700 underline underline-offset-1 cursor-pointer hover:text-blue-900"}> click here to pay</span>
               </div>

               <div className={"flex justify-center p-6 "}>
                   <button className={"text-center font-semibold border border-black rounded-2xl w-[165px] bg-orange-600 hover:bg-orange-400  " }>
                       confirm Registration
                   </button>
               </div>



           </div>



        </div>

    </>
    
  )
}

export default Register