import { useEffect } from "react";
import copy from "copy-to-clipboard";

const AffiliateButton = ({ isUSerID, isAdsDetails }) => {
  useEffect(() => {
   
  }, [])

  const generateLink = () => {
    const adsId = isAdsDetails.id
    const affricateCode = `${isUSerID}NICOZN${adsId}`
    // const AffiliateLink = `http://172.16.20.44:5173/anonymous/${affricateCode}`
<<<<<<< HEAD
    const AffiliateLink = `  http://192.168.237.239:5173/${affricateCode}`
=======
    const AffiliateLink = `http://192.168.237.163:5173/anonymous/${affricateCode}`
    // const AffiliateLink = `http://192.168.0.139:5173/anonymous/${affricateCode}`
>>>>>>> b1fc06ccd228bae05019d748dfedcd059d19c781
    
    copy(AffiliateLink)
    alert(`The link is copied to clipboard ${AffiliateLink}`)

    
  }
  return (
    <button
      className=" px-16 mt-0 py-3 rounded-xl 
   font-extrabold uppercase text-green-800 
   border-2 border-green-800
    hover:bg-green-800 hover:text-white
   max-sm:mx-4 max-sm:px-8 max-sm:py-1 max-sm:rounded-lg
   max-2xl:mx-10"
      onClick={generateLink}
    >
      Affiliate
    </button>
  )
}

export default AffiliateButton
