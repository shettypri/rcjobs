import {useState} from "react";
import {v4} from "uuid";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import { storage,db} from "../../config/firebase.config.js";
import {addDoc,collection} from "firebase/firestore";

const Add_ads = () => {
    const [uploadAds, setUploadAds] = useState("");
    const handleAds = async ()=>{
        console.log(uploadAds.name)
        const imageFile = uploadAds.name
        const imageFolder = "ADS_FOLDER"
        const textV4 = v4()
        //     image uploade code to firebase:
        const fileFolderRef = ref(storage,`${imageFolder}/${imageFile + textV4}`)
        const collectionList=collection(db,'ADS_DATA')
        try {
            await uploadBytes(fileFolderRef,uploadAds)
            const imageUrl = await getDownloadURL(ref(storage,`${imageFolder}/${imageFile + textV4}`))
            const dataStored=await addDoc(collectionList, {"imageURL":imageUrl});
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            <div className="flex justify-center items-center flex-col border border-blue-700 m-auto mt-[25px] rounded  drop-shadow-2xl bg-gradient-to-r from-gray-50 to-orange-100
            w-1/3
            max-sm:w-64 max-sm:p-3">
                <div className="m-auto flex flex-col">
                    <label className="font-bold my-5 uppercase">
                        Upload the add below
                    </label>

                    <input type={"file"} accept={"image/*"}
                           className="border border-blue-100
                    w-full
                    "
                           onChange={(event) => {
                               setUploadAds(event.target.files[0])
                           }
                           }
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-green-500 font-bold uppercase mt-6">
                        Adds is Updated
                    </label>

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

        </>
    )
}

export default Add_ads