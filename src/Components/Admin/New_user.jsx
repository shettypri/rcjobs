import {useState} from "react";
import {useDispatch} from "react-redux";
import {acceptRequestReducers, newUserReducers} from "../../App/Slice/adminUserSlice.js";

const New_user = (props) => {
    const dispatch = useDispatch()
    const [showImage, setShowImage] = useState(false);
    return (
        <>
            <tr className=" font-bold uppercas1">
                <td className="border-2 border-black w-1/3 px-10 h-10
                max-sm:py-1 max-sm:w-[50px] max-sm:text-[12px]

                ">
                    {props.indexValue + 1}
                </td>
                <td className="border-2 border-black w-1/3 px-10 h-10
                max-sm:py-1 max-sm:text-[12px]
                ">
                    {props.userData.name}
                </td>
                <td className="border-2 border-black w-1/3  h-10 px-4 py-2
                max-sm:py-1 max-sm:px-0 max-sm:text-[12px]
                ">
                    <button
                        className="bg-yellow-400 py-1 px-4 font-bold border-2 border-orange-500 rounded-full hover:bg-white
                        max-sm:py-0
                        "
                        onClick={() => setShowImage(true)}
                    >
                        View Payment Proof
                    </button>
                </td>
            </tr>
            {
                showImage &&
                (
                    <tr className="border border-orange-500 mx-auto">
                        <td colSpan={3}
                            className="mx-2 "
                        >
                            <div className=" flex justify-center mt-2">
                                <img src={props.userData.JoiningFee}
                                     className=" rounded shadow-2xl shadow-gray-600"
                                     width={500} height={250}
                                />
                            </div>

                            <div className="flex justify-around my-2 py-2">
                                <button className="border border-black px-10 py-2 uppercase underline font-extrabold rounded-full text-white bg-green-600 shadow-lg shadow-black"
                                        onClick={() => {
                                            console.log(props.userData.id)
                                            setShowImage(false)
                                            dispatch(acceptRequestReducers(props.userData.id))
                                            dispatch(newUserReducers())
                                        }
                                        }
                                >
                                    Admit user
                                </button>

                                <button className="border border-black px-10 py-2 uppercase underline font-extrabold rounded-full text-white bg-red-600 shadow-lg shadow-black"
                                        onClick={() => setShowImage(false)}
                                >
                                    Show less
                                </button>
                            </div>
                        </td>
                    </tr>
                )}
        </>
    )
}

export default New_user