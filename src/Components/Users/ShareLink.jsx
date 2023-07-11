import {useSelector} from "react-redux";
import copy from "copy-to-clipboard";
import {useState} from "react";
const ShareLink = () => {
    const{data} = useSelector(state => state.userReducer)
    const refLink = data.Referral_Code
    // const referLink= `http://192.168.0.139:5173/user/${refLink}` ;
    const referLink= `http://172.16.20.80:5173/user/${refLink}` ;
    const handleShareLink = async ()=>{
        copy(referLink)
        alert(`The link is copied to clipboard ${referLink}`)
    }
    return (
        <>
        <div className="">
            <button className="bg-yellow-500 px-4 py-2 rounded-full border-2 border-black font-extrabold uppercase"
            onClick={handleShareLink}>
                Refferal Link
            </button>
        </div>
        </>
    );
}

export default ShareLink;