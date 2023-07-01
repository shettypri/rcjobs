import {useState} from "react";

const New_user = (props) => {
    console.log(props.userData)
    console.log(props.indexValue)
    const [showImage, setShowImage] = useState(false);
    return (
       <>
       <tr className="m-4 border border-gray-700 ">
           <td className="items-center m-auto p-4 mx-4 border border-b-black">
               {props.indexValue + 1}
           </td>
           <td className=" items-center m-auto p-4 mx-4 border border-b-black">
               {props.userData.name}
           </td>
           <td className="items-center m-auto p-4 mx-4 border border-b-black">
               <button className="bg-red-700 text-white p-2 rounded-full uppercase text-[15px] items-center m-auto hover:bg-red-900"
               onClick={()=>setShowImage(true)}
               >
                   View Payment Proof
               </button>
           </td>
       </tr>
           {
               showImage &&
               (
                   <tr >
                       <td colSpan={3}
                           className="p-2"
                       >
                           <div>
                               <img src={props.userData.JoiningFee}
                                    className="w-96 h-auto rounded"
                                    width={400} height={250}
                               />
                           </div>

                           <div className={"flex flex-row justify-around my-4"}>
                               <button className="bg-green-600 text-white font-bold uppercase p-3 rounded-full px-5"
                               onClick={()=>
                               console.log(props.newUsers.id)
                               }
                               >
                                   Admin  user
                               </button>

                               <button className="bg-red-600 text-white font-bold uppercase p-3 rounded-full px-5"
                               onClick={()=>setShowImage(false)}
                               >
                                   Show less
                               </button>
                           </div>
                       </td>
                   </tr>
               )}
       </>
    )
}

export default New_user