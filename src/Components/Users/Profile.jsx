// import wallet from "../../../src/assets/Images/wallet.png"
 import profile from "../../../src/assets/Images/profile.png"
 // import reference from "../../../src/assets/Images/reference.png"
import {useState} from "react";
const Profile = () => {
    const [withdraw, setWithdraw] = useState(true);
    const handleChange=(e)=>{
        if(e.target.value>=250){
            {setWithdraw(false)}
        }
        else{
            {
                setWithdraw(true)
            }
        }
    }



    return (
        <>
            <div className={"flex md:flex-col  justify-center text-center p-4 border-gray-800 border-1 rounded-2xl shadow-2xl  0 mt-14 w-[360px] ml-[30px] md:h-15 md:w-[550px] md:ml-[400px] space-y-4 space-x-7"}>
               <div className={"flex  md:flex-row  flex-col p-2 space-x-6"}>
                   {/*{left}*/}

                   <div className={" flex md:flex-col  flex-row  justify-around space-x-3 "}>
                       <div className={"flex flex-col  "}>
                           <img src={profile} className={"w-[50px]" } alt={""}/>
                           <label className={""}>Name</label>
                       </div>

                       <div className={"flex md:flex-col flex-row  space-x-2 md:space-y-3 mt-6 ]"}>
                           <div>
                               <label>Wallet</label>

                           </div>

                           <div><label
                           className={"space-y-3"}>reference</label></div>

                       </div>


                   </div>


                   {/*{right}*/}

                   <div className={"flex flex-col space-y-7 drop-shadow-md justify-items-start "}>
                       <table>
                           <tbody>
                           <tr>
                               <th>Name</th>
                               <th>:</th>
                               <th> <input
                                   type={"text" }
                                   className={"border"}
                               /></th>
                           </tr>
                           <tr>
                               <th>phone</th>
                               <th>:</th>
                               <th> <input
                                   type={"text" }
                                   className={"border"}
                               /></th>
                           </tr>
                           <tr>
                               <th>Address</th>
                               <th>:</th>
                               <th> <input
                                   type={"text" }
                                   className={"border"}
                               /></th>
                           </tr>
                           <tr>
                               <th>amount</th>
                               <th>:</th>
                               <th> <input
                                   type={"text" }
                                   className={"border"}
                                   onChange={handleChange}
                               /></th>
                           </tr>
                           </tbody>
                       </table>

                       <div className={"flex flex-row space-x-3 p-4"}>
                           <button className={"disabled:bg-white enabled:bg-orange-600  enabled:text-white md:h-9  w-[150px] rounded-2xl md:w-[155px] h-9 "} disabled={withdraw}> Withdraw</button>
                           <button className={"bg-white hover:bg-red-700 md:h-9 rounded-2xl md:w-[155px] w-[100px]"} >Cancel</button>

                       </div>
                   </div>

               </div>

            </div>

        </>
    )
}

export default Profile