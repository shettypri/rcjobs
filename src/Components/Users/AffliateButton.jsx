import { useEffect } from "react";
import copy from "copy-to-clipboard";

const AffiliateButton = ({ isUSerID, isAdsDetails }) => {
  useEffect(() => {
   
  }, [])

  const generateLink = () => {
    const adsId = isAdsDetails.id
    console.log(adsId);
    console.log(isUSerID);
    const affricateCode = `${isUSerID}NICOZN${adsId}`
    const AffiliateLink = `http://172.16.20.24:5173/user/${affricateCode}`
    console.log(AffiliateLink);
    
    copy(AffiliateLink)
    alert(`The link is copied to clipboard ${AffiliateLink}`)

    const arrayLink = AffiliateLink.split('user/')[1].split('NICOZN')
    console.log(arrayLink);
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
