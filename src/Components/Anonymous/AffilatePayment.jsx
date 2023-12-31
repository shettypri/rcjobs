import { useState } from "react"
import AnonymousAffiliate from "./AnonymousAffiliate"
import LoginAffliate from "./LoginAffliate"




const AffiliatePayment = () => {
const [selectedOption, setSelectedOption] = useState("Anonymous")

const handleOptionChange = (event)=>{
    setSelectedOption(event.target.value);
}
  return (
  <>
   <div>
   <div className="flex max-sm:w-3/4 max-sm:ml-10 max-sm:h-4 justify-center items-center text-center w-2/4 ml-48 h-8 mt-3 mb-3 mx-auto  ">
       <select className="w-full py-2 border-2 border-black uppercase mx-auto flex text-center rounded-lg"
       value={selectedOption}
       onChange={handleOptionChange}>
        
        <option className="" value="Anonymous">Guest User</option>
        <option className="" value="User">User</option>

        </select>

    </div>
    <div className="flex flex-col">
        {selectedOption === "Anonymous" ? 
        <AnonymousAffiliate/> 
        :
         <LoginAffliate /> }

    </div>
   </div>
  </>
    
    
  )
}

export default AffiliatePayment