import {ClipLoader} from "react-spinners";
const Loader =()=> {
    return (
        <>
            <div className=" w-full  flex justify-center ">
                <ClipLoader className="text-black text-2xl font-extrabold mt-4"
                    color={"808080"}
                    size={"40"}
                />
            </div>
        </>
    );
}

export default Loader;