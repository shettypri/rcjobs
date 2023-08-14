import {BarLoader, BounceLoader} from "react-spinners";

const PreLoader = () => (
    <>
        <div className="flex justify-center items-center py-40">
            <div className=" h-full ">
                <BounceLoader
                    color="#d07f0e"
                    cssOverride={{}}
                    size={150}
                    speedMultiplier={1}
                />

                <p className="text-2xl font-bold text-orange-500 mt-2">
                    Loading.....
                </p>
            </div>
        </div>
    </>
);

export default PreLoader;