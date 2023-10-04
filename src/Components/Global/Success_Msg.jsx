
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SuccessMsg = (props) =>{
    const [successShow, setSuccessShow] = useState(true);
    return (
        <>
            {successShow &&
                <div>
                    <div className={"bg-red-200 text-black font-black flex flex-col"}>
                        <h2>
                            {/* eslint-disable-next-line react/prop-types */}
                            {props.success}
                        </h2>
                        <FontAwesomeIcon className="xmark" id="closemark" icon={faXmark} size="xl" style={{color: "#ffffff",}}
                                         onClick={()=>
                                             setSuccessShow(false)}
                        />

                    </div>

                </div>
            }


        </>
    );
}

export default SuccessMsg;