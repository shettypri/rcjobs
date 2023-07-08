import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


const ErrorMsg = (props) => {
    const [errorShow, setErrorShow] = useState(true);
    return (
        <>{
            errorShow &&

            <div>
                <div className={"bg-red text-black font-black flex flex-col"}>
                    <h2>

                        {/* eslint-disable-next-line react/prop-types */}
                        {props.error}
                    </h2>
                    <FontAwesomeIcon className="xmark" id="closemark" icon={faXmark} size="xl" style={{color: "#ffffff",}}
                                     onClick={()=>
                                         setErrorShow(false)}
                    />

                </div>

            </div>
        }

        </>
    );
}

export default ErrorMsg;