import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteAdsReducers, fetchAdsReducers} from "../../App/Slice/fetchAdsSlice.js";

const ListAds =() => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAdsReducers())
    }, []);
    const deleteAds = (id)=>{
        dispatch(deleteAdsReducers(id))
        dispatch(fetchAdsReducers())
    }
    const{fetchAds}=useSelector(state => state.fetchAdsReducers)
    return (
        <>
            <table className="w-1/2 mx-auto mt-4">
                <tr>
                    <th className="px-2 uppercase border border-black
                    max-sm:text-[12px] px-[10px] py-1
                    ">sl no</th>
                    <th className="px-2 uppercase border border-black
                    max-sm:text-[12px] px-[10px] py-1
                    ">Client Name</th>
                    <th className="px-2 uppercase border border-black
                    max-sm:text-[12px] px-[10px] py-1
                    ">ads name</th>
                    <th className="px-2 uppercase border border-black
                    max-sm:text-[12px] px-[10px] py-1
                    ">Contact</th>
                    <th className="px-2 uppercase border border-black
                    max-sm:text-[12px] px-[10px] py-1
                    ">Delete ads</th>
                </tr>

                {
                    fetchAds.Success &&(

                        fetchAds.data.map((ads,index)=>{
                            // console.log('ads->',ads)
                            return(
                                <tr key={index} >
                                    <td className=" border border-black
                                    max-sm:text-[12px] px-[10px] py-1
                                    ">{index+1}</td>
                                    <td className=" border border-black
                                    max-sm:text-[12px] px-[10px] py-1
                                    ">{ads.name}</td>
                                    <td className=" border border-black
                                    max-sm:text-[12px] px-[10px] py-1
                                    ">{ads.adsName}</td>
                                    <td className=" border border-black
                                    max-sm:text-[12px] px-[10px] py-1
                                    ">+ {ads.Phone}</td>
                                    <td className=" border border-black
                                    max-sm:text-[12px] px-[10px] py-1
                                    ">
                                        <button className="bg-red-700  text-white font-bold uppercase
                                        rounded-full border border-black mx-auto px-5 py-2
                                        hover:bg-red-600
                                        max-sm:px-2 max-sm:py-2
                                        "
                                        onClick={()=>deleteAds(ads.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    )
                }
            </table>
        </>
    );
}

export default ListAds;