import { useState } from "react"
import AnonymousAffiliate from "./AnonymousAffiliate"
import LoginAffiliate from "./LoginAffliate"


const AffiliatePayment = () => {
const [selectedOption, setSelectedOption] = useState("Anonymous")

const handleOptionChange = (event)=>{
    setSelectedOption(event.target.value);
}
  return (
  <>
   <div>
   <div className="flex max-sm:w-full justify-center items-center text-center w-2/4 ml-14 h-8 mt-6">
       <select className="w-full py-3 border-2 border-black uppercase mx-auto flex text-center rounded-sm"
       value={selectedOption}
       onChange={handleOptionChange}>
        
        <option className="" value="Anonymous">Anonymous</option>
        <option className="" value="User">User</option>

        </select>

    </div>
    <div>
        {selectedOption === "Anonymous" ? <AnonymousAffiliate/> : <LoginAffiliate/> }
    </div>
   </div>
  </>
    
    
  )
}

export default AffiliatePayment