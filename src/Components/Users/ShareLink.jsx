import {useSelector} from "react-redux";
import copy from "copy-to-clipboard";

const ShareLink = () => {
    const{data} = useSelector(state => state.userReducer)
    const refLink = data.Referral_Code
    // const referLink= `http://192.168.0.139:5173/user/${refLink}` ;
    // const referLink= `http://172.16.20.80:5173/user/${refLink}` ;
    // const referLink= `https://rcjobs-e85b3.web.app/user/${refLink}` ;
    const referLink= `https://earn.rcjobssms.com/user/${refLink}` ;
    /**
     * The function `handleShareLink` copies a link to the clipboard and displays an alert message.
     */
    const handleShareLink = async ()=>{
        copy(referLink)
        alert(`The link is copied to clipboard ${referLink}`)
    }
    return (
        <>
        <div className="">
            <button className="bg-gray-500 text-white px-4 py-2 rounded-lg  font-extrabold uppercase"
            onClick={handleShareLink}>
                Refferal Link
            </button>
        </div>
        </>
    );
}

export default ShareLink;