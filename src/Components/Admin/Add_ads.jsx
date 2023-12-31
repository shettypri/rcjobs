import {useState} from "react";
import {v4} from "uuid";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {storage, db} from "../../config/firebase.config.js";
import {addDoc, collection} from "firebase/firestore";
import PhoneInput from "react-phone-input-2";
import ListAds from "./ListAds.jsx";
import { useNavigate } from "react-router-dom";

const Add_ads = () => {
    const navigate = useNavigate()
    const [inputError, setInputError] = useState(false);
    const [uploadAds, setUploadAds] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSucess] = useState(false);
    const [clientDetails, setClientDetails] = useState({
        name: "", isAdsShow: true, Phone: "", Ads_name: "", Ads_price: "", Ads_Offer: "",
        affiliatePercentage:1,
    });
    const [showUploadBtn, setShowUploadBtn] = useState(false);
    const handleChange = (event) => {
        // if (event.target.validity.valid) .replace(/[^a-z]/gi, '')
        setClientDetails({...clientDetails, [event.target.name]: event.target.value})

    }
    const handleAds = async () => {

        if (clientDetails.name.length === 0 || clientDetails.Phone.length === 0 || uploadAds === "" || clientDetails.Ads_price.length === 0 || clientDetails.Ads_Offer === 0 || clientDetails.Ads_name.length === 0 ||
            !(clientDetails.affiliatePercentage >=1 && clientDetails.affiliatePercentage <=100)
        ) {
            setInputError(true)
        } else {
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
                setLoading(false)
                setClientDetails({
                    ...clientDetails,
                    name: "", isAdsShow: true, Phone: "+91", Ads_name: "", Ads_price: "", Ads_Offer: "",
                })
                setUploadAds(null)
                delete clientDetails.adsName;
                setSucess(true)
                setTimeout(() => {

                    setSucess(false)
                }, 2000);

            } catch (error) {
                console.error(error);
            }
        }
       
    }


    return (
        <>
            {
                showUploadBtn ?
                    (
                        <div className="">
                            <div className="flex justify-end  mt-4 mr-44 max-sm:mr-4">
                                <button className="bg-black  text-white px-8 py-3  border-2 border-black font-bold uppercase rounded-lg
                 hover:from-orange-800
                " onClick={() => setShowUploadBtn(false)}>
                                    Show list
                                </button>
                            </div>

                            {/* Form begins from here*/}
                            <div className="flex justify-center items-center flex-col border border-blue-700 m-auto mt-[25px] rounded    w-1/2
                             max-sm:w-full max-sm:p-3">
                                <div className="m-auto flex flex-col">
                                    <label className="font-bold my-5 uppercase">
                                        Upload the ad below
                                    </label>
                                </div>

                                <div>
                                    <div className="mx-auto px-6 justify-between">
                                        <PhoneInput
                                            className="flex flex-row w-full  mb-4 px-8  "
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
                                    <div className={`${inputError ? "block" : "hidden"}`}>
                                        {inputError && clientDetails.Phone.length === 0 &&
                                            (<label
                                                className={"capitalize font-semibold not-italic  text-red-600 max-sm:ml-14"}>please
                                                enter the phone number</label>)
                                        }
                                    </div>

                                    <div className="flex flex-row max-sm:block justify-around ">
                                        <label className="font-bold mx-2 uppercase mt-4 max-sm:ml-14 ">Client
                                            Name</label>
                                        <input
                                            type="text" name="name"
                                            pattern="[a-zA-Z\s]"
                                            value={clientDetails.name}
                                            placeholder="Enter the client Name"
                                            onChange={handleChange}
                                            className="border border-black py-2 rounded-xl px-2 w-[220px] mx-4 mt-2
                                                        max-sm:w-60 max-sm:m-0 max-sm:ml-14 "
                                        />

                                    </div>
                                    <div className={`${inputError ? "block" : "hidden"}`}>
                                        {inputError && clientDetails.name.length === 0 &&
                                            (<label
                                                className={"capitalize font-semibold not-italic  text-red-600 max-sm:ml-14"}>please
                                                enter the name</label>)
                                        }
                                    </div>



                                </div>

                                <div className="flex flex-col ">
                                    <div className="m-auto flex flex-row my-2 justify-between">
                                        <label className="font-bold mx-2 uppercase mb-4">
                                            Product Name
                                        </label>
                                        <input
                                            type="text"
                                            name="Ads_name"
                                            pattern="[a-zA-Z\s]"
                                            placeholder="Enter the Product name"
                                            value={clientDetails.Ads_name}
                                            onChange={handleChange}
                                            className="border border-black py-2 rounded-xl  px-2 w-[220px] mx-4 mt-1
                                                        max-sm:w-full max-sm:m-1"
                                        />
                                    </div>
                                    <div className={`${inputError ? "block" : "hidden"}`}>
                                        {inputError && clientDetails.Ads_price.length === 0 &&
                                            (<label className="capitalize font-semibold not-italic  text-red-600">please
                                                enter the Price</label>)
                                        }
                                    </div>
                                </div>
                                <div className="flex flex-col">
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
                                            className="border border-black py-2 rounded-xl  px-2 w-[220px] mx-4 mt-1
                                                        max-sm:w-full max-sm:m-1"
                                        />
                                    </div>
                                    <div className={`${inputError ? "block" : "hidden"}`}>
                                        {inputError && clientDetails.Ads_price.length === 0 &&
                                            (<label className="capitalize font-semibold not-italic  text-red-600">please
                                                enter the Price</label>)
                                        }
                                    </div>
                                </div>


                                <div className="flex flex-col py-3 ">
                                    <div className="m-aut o flex flex-row my-2 justify-around   ">
                                        <label className="font-bold mx-2 uppercase mb-4">offer Percentage</label>
                                        <input
                                            type="text"
                                            name="Ads_Offer"
                                            pattern="[a-zA-Z\s]"
                                            placeholder="Enter the offer percetage"
                                            value={clientDetails.Ads_Offer}
                                            onChange={handleChange}
                                            className="border border-black py-2 rounded-xl px-2 w-[220px] mx-4 mt-1
                                                        max-sm:w-full max-sm:m-0"
                                        />
                                    </div>
                                    <div className={`${inputError ? "block" : "hidden"}`}>
                                        {inputError && clientDetails.Ads_Offer.length === 0 && (
                                            <label className="capitalize font-semibold not-italic  text-red-600">Please
                                                enter the offer percentage </label>)}
                                    </div>
                                </div>
                                <div
                                    className="m-auto flex flex-col py-2 border-dashed border-2 border-gray-800 px-14 py-4">
                                    <input type={"file"} accept={"image/*"}
                                           // value={uploadAds}
                                           className="border border-blue-100 w-full uppercase italic font-bold"
                                           onChange={(event) => {
                                               setUploadAds(event.target.files[0])
                                           }
                                           }
                                    />
                                    <div>
                                        <label className="text-black font-bold text-lg my-2 py-4">
                                            Please select the product image
                                        </label>
                                    </div>
                                </div>

                                <div className={`${inputError ? "block" : "hidden"}`}>
                                    {inputError && uploadAds <= 0 &&
                                        (<label className={"capitalize font-semibold not-italic  text-red-600  "}>please
                                            Upload image</label>)
                                    }
                                </div>

                                
                                <div className="flex flex-col py-3 ">
                                    <div className="m-aut o flex flex-row my-2 justify-around   ">
                                        <label className="font-bold mx-2 uppercase mb-4">Affiliate Percentage</label>
                                        <input
                                            type="text"
                                            name="affiliatePercentage"
                                            pattern="[a-zA-Z\s]"
                                            placeholder="Enter the offer percetage"
                                            value={clientDetails.affiliatePercentage}
                                            onChange={handleChange}
                                            className="border border-black py-2 rounded-xl px-2 w-[220px] mx-4 mt-1
                                                        max-sm:w-full max-sm:m-0"
                                        />
                                    </div>
                                    <div className={`${inputError ? "block" : "hidden"}`}>
                                        {inputError && !(clientDetails.affiliatePercentage >=1 && clientDetails.affiliatePercentage <=100) && (
                                            <label className="capitalize font-semibold not-italic  text-red-600">
                                               it should between 1% to 100% </label>)}
                                    </div>
                                </div>



                                
                                <div className="flex flex-col">
                                    {
                                        loading && (<h1>Loading......</h1>)}
                                    {
                                        success && (
                                            <label className="text-green-500 font-bold uppercase mt-6">
                                                Adds is Updated
                                            </label>
                                        )
                                    }

                                    <button className="border-2 border-indigo-900 rounded-lg bg-orange-400 text-white font-bold uppercase my-8
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
                                    <button className="bg-black text-white px-8 py-3  border-2 border-black font-bold uppercase rounded-lg
                hover:bg-gray-500 hover:from-orange-800
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