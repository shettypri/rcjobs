
import copy from "copy-to-clipboard";
import { useState } from "react";
import SocialMedia from "../Global/Affliate/SocialMedia";

const AffiliateButton = ({ isUSerID, isAdsDetails }) => {
  const [showModal, setShowModal] = useState(false)
  const adsId = isAdsDetails.id
  const affricateCode = `${isUSerID}NICOZN${adsId}`
  // const AffiliateLink = `http://172.16.20.44:5173/anonymous/${affricateCode}`
  // const AffiliateLink = `http://192.168.237.163:5173/anonymous/${affricateCode}`
  // const AffiliateLink = `http://192.168.0.139:5173/anonymous/${affricateCode}`
  // const AffiliateLink = `http://192.168.237.163:5173/anonymous/${affricateCode}`
  const AffiliateLink = `https://earn.rcjobssms.com/anonymous/${affricateCode}`

  const generateLink = () => {
    setShowModal(true)

    // copy(AffiliateLink)
    // alert(`The link is copied to clipboard ${AffiliateLink}`)


  }
  return (
    <>
    
      <button
        className=" px-10 mt-0 py-3 rounded-xl 
     font-extrabold uppercase text-green-800 
     border-2 border-green-800
      hover:bg-green-800 hover:text-white
     max-sm:mx-4 max-sm:px-8 max-sm:py-1 max-sm:rounded-lg
     max-2xl:mx-10"
        onClick={generateLink}
      >
        Share
      </button>
      {
        showModal && (
          <>
            <div className="w-screen z-100">
              <div
                className="justify-center items-center flex 
            overflow-x-hidden overflow-y-auto fixed inset-0 
            z-50 outline-none focus:outline-none "
              >
                <div className="relative w-full my-6 mx-auto max-w-3xl max-sm:w-full max-md:w-ful max-lg:w-full">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        Share Link
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-red-600 opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          &#10006;
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-col bg-none">
                      <p className="my-4 text-slate-500 text-lg leading-relaxed flex">
                        <SocialMedia LinkToFollow={AffiliateLink} />
                      </p>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
  
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </div>
          </>
        )
      }

    </>


  )
}

export default AffiliateButton
