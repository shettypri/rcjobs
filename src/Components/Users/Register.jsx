const Register = () => {
  return (
    <>
        <div className={"flex flex-wrap justify-center mt-4"}>

           <div className={"flex flex-col space-y-3 p-0  bg-white rounded-lg shadow-xl border-2 border-black"}>
               <div className={" text-3xl font-semibold bg-[#FD7F2C] text-white w-full uppercase m-[0px] rounded  h-12"}>Registration Form</div>

               <div className={" flex flex-col text-black p-4"}>
               <label className={"font-bold"}>Enter Full Name</label>
               <input
                   type="text"
                   className=" mt-1 border-2 border-black h-6  "/>
               </div>

               <div className={" flex flex-col text-black p-4"}>
                   <label className={"font-bold"}>Enter phone number</label>
                   <input
                       type=""
                       className=" mt-1 border-2 border-black h-6  "/>
               </div>

               <div className={" flex flex-col text-black p-4"}>
               <label className={"font-bold"}>Enter payment proof </label>
               <div className="">
                   <input
                       type="file"
                       name="name"
                       accept="image/*"
                       className=" mt-1  "
                   />
               </div>
               </div>
               <div className={"p-6"}>
                   IF NOT PAID YET <span className={"italic text-blue-700 underline underline-offset-1 cursor-pointer hover:text-blue-900"}> click here to pay</span>
               </div>

               <div className={"flex justify-center p-6 "}>
                   <button className={"text-center font-semibold border-1  text-white border-black rounded-2xl w-[130px] h-[35px] bg-gray-600 hover:bg-orange-400  " }>
                       Register
                   </button>
               </div>



           </div>



        </div>

    </>
    
  )
}

export default Register