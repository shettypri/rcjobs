
import AdSense from "react-adsense/src";
import {useEffect} from "react";

const GoogleAds = () => {
    useEffect(() => {
        // (adsbygoogle = window.adsbygoogle || []).push({});
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.log("Error ads components",e)
        }
    }, []);
    return(
        <>
                <ins className="adsbygoogle"
                     style={{display: "block"}}
                     data-ad-client={import.meta.env.VITE_REACT_APP_GOOGLE_ADS_PUBLISHER_ID}
                     data-ad-slot={import.meta.env.VITE_REACT_APP_GOOGLE_ADS_SLOT_ID}
                     data-ad-format="auto"
                     data-full-width-responsive="true"

                >
                </ins>
        </>
    )
}

export default GoogleAds;