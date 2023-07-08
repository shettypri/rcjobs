import React from 'react';
import {ClipLoader} from "react-spinners";
const Loader =()=> {
    return (
        <>
            <div>
                <ClipLoader className={"w-full"}
                    color={"#f9fefd"}
                    size={"40"}
                />
            </div>
        </>
    );
}

export default Loader;