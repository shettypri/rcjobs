import {useEffect, useState} from "react";
import {v4} from "uuid";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {storage, db} from "../../firebase.config.js";
import {addDoc, collection} from "firebase/firestore";
import PhoneInput from "react-phone-input-2";
import {fetchAdsReducers} from "../../App/Slice/fetchAdsSlice.js";
import {useDispatch, useSelector} from "react-redux";
import ListAds from "./ListAds.jsx";

const Add_ads = () => {
    const [uploadAds, setUploadAds] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSucess] = useState(false);
    const [clientDetails, setClientDetails] = useState({
        name: "",
        isAdsShow: true,
        Phone: "",
        Ads_name: "",
        Ads_price: "",
        Ads_Offer: "",
    });
    const [showUploadBtn, setShowUploadBtn] = useState(false);
    const handleChange = (event) => {
        // if (event.target.validity.valid) .replace(/[^a-z]/gi, '')
        setClientDetails({...clientDetails, [event.target.name]: event.target.value})

    }
    const handleAds = async () => {
        setLoading(loading)
        clientDetails["adsName"] = uploadAds.name
        const imageFile = uploadAds.name
        const imageFolder = "ADS_FOLDER"
        const textV4 = v4()

        //     image uploade code to firebase:
        const fileFolderRef = ref(storage, `${imageFolder}/${imageFile + textV4}`)
        const collectionList = collection(db, 'ADS_DATA')
        try {
            await uploadBytes(fileFolderRef, uploadAds)
            const imageUrl = await getDownloadURL(ref(storage, `${imageFolder}/${imageFile + textV4}`))
            clientDetails['imageURL'] = imageUrl
            await addDoc(collectionList, clientDetails);
            console.log(clientDetails)
            setLoading(false)
            setSucess(true)
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            {
                showUploadBtn ?
                    (
                        <div className="">
                            <div className="flex justify-end  mt-4 mr-44 max-sm:mr-4">
                                <button className="bg-gradient-to-r from-orange-600 px-8 py-3  border-2 border-black font-bold uppercase rounded-full
                shadow-xl shadow-gray-500 hover:bg-gradient-to-r hover:from-orange-800
                " onClick={() => setShowUploadBtn(false)}>
                                    Show list
                                </button>
                            </div>

                            {/* Form begins from here*/}
                            <div className="flex justify-center items-center flex-col border border-blue-700 m-auto mt-[25px] rounded  drop-shadow-2xl bg-gradient-to-r from-gray-50 to-orange-100 w-1/2
                             max-sm:w-64 max-sm:p-3">
                                <div className="m-auto flex flex-col">
                                    <label className="font-bold my-5 uppercase">
                                        Upload the ad below
                                    </label>
                                </div>

                                <div>
                                    <div className="flex flex-row max-sm:block">
                                        <label className="font-bold mx-2 uppercase mt-4">Client Name</label>
                                        <input
                                            type="text" name="name"
                                            pattern="[a-zA-Z\s]"
                                            value={clientDetails.name}
                                            placeholder="Enter the client Name"
                                            onChange={handleChange}
                                            className="border border-black py-2 rounded-full px-2 w-[320px] mx-4 mt-2
                                                        max-sm:w-full max-sm:m-0"
                                        />
                                    </div>

                                    <div className="mx-auto px-6">
                                        <PhoneInput
                                            className="flex flex-row w-full  mb-4 px-8"
                                            country={"in"} value={clientDetails.Phone} name={"Phone"}
                                            onChange={(event) => {
                                                const regex = /^[0-9\b]+$/;
                                                if (regex.test(event)) {
                                                    setClientDetails({...clientDetails, ["Phone"]: event})
                                                }
                                            }
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="m-auto flex flex-col">
                                    <input type={"file"} accept={"image/*"}
                                           className="border border-blue-100 w-full uppercase italic font-bold"
                                           onChange={(event) => {
                                               setUploadAds(event.target.files[0])
                                           }
                                           }
                                    />
                                </div>

                                <div className="m-auto flex flex-row my-2">
                                    <label className="font-bold mx-2 uppercase mb-4">
                                        Product Price
                                    </label>
                                    <input
                                        type="text"
                                        name="Ads_price"
                                        pattern="[a-zA-Z\s]"
                                        placeholder="Enter the Product Price"
                                        value={clientDetails.Ads_price}
                                        onChange={handleChange}
                                        className="border border-black py-2 rounded-full px-2 w-[320px] mx-4 mt-1
                                                        max-sm:w-full max-sm:m-0"
                                    />
                                </div>
                                <div className="m-auto flex flex-row my-2">
                                    <label className="font-bold mx-2 uppercase mb-4">offer Percentage</label>
                                    <input
                                        type="text"
                                        name="Ads_Offer"
                                        pattern="[a-zA-Z\s]"
                                        placeholder="Enter the offer percetage"
                                        value={clientDetails.Ads_Offer}
                                        onChange={handleChange}
                                        className="border border-black py-2 rounded-full px-2 w-[320px] mx-4 mt-1
                                                        max-sm:w-full max-sm:m-0"
                                    />
                                </div>


                                <div className="flex flex-col">
                                    {
                                        loading && success(
                                            <h1>
                                                loading
                                            </h1>
                                        )
                                    }
                                    {
                                        success && (
                                            <label className="text-green-500 font-bold uppercase mt-6">
                                                Adds is Updated
                                            </label>
                                        )
                                    }

                                    <button className="border-2 border-indigo-900 rounded-full bg-orange-400 text-white font-bold uppercase my-8
                    w-[250px] h-[50px] hover:bg-orange-600 transition
                    max-sm:h-9 max-sm:w-[150px]
                    "
                                            onClick={handleAds}
                                    >
                                        upload ADDS
                                    </button>
                                </div>

                            </div>

                        </div>
                    ) : (
                        <div>
                            <div>
                                <div className="flex justify-end  mt-4 mr-44
            max-sm:mr-4
            ">
                                    <button className="bg-gradient-to-r from-orange-600 px-8 py-3  border-2 border-black font-bold uppercase rounded-full
                shadow-xl shadow-gray-500 hover:bg-gradient-to-r hover:from-orange-800
                "
                                            onClick={
                                                () =>
                                                    setShowUploadBtn(true)
                                            }
                                    >
                                        Upload form
                                    </button>
                                </div>

                                <div className="max-sm:mt-4 flex flex-col justify-center">
                                    <ListAds/>
                                </div>
                            </div>
                        </div>
                    )
            }

        </>
    )
}

export default Add_ads