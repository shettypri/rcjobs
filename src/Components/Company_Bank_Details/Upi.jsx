import React from 'react';
import Qr_code from '../../assets/QR_CODE/QRCode_Image.jpeg'
import upi_code from "../../assets/QR_CODE/upi_image_.jpeg"

const Upi = () => {
    return (
        <>
          <div className="w-[600px] flex align-middle justify-center py-4 max-sm:w-full ">
              <img  className="w-80 " src={upi_code} alt=""/>
          </div>


        </>
    );
}

export default Upi;