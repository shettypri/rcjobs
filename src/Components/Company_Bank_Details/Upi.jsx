import React from 'react';
import Qr_code from '../../assets/QR_CODE/QRCode_Image.jpeg'

const Upi = () => {
    return (
        <>
          <div className="w-[600px] flex align-middle justify-center py-4 ">
              <img  className="w-80 " src={Qr_code} alt=""/>
          </div>


        </>
    );
}

export default Upi;