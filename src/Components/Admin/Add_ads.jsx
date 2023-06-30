import React from 'react'

const Add_ads = () => {
    return (
        <>
            <div className="flex justify-center items-center flex-col border border-blue-700 w-1/2 m-auto mt-[25px]">
                <div className="m-auto flex flex-col">
                    <label className="">
                        Enter the Add
                    </label>

                    <input type={"file"} accept={"image/*"}/>
                </div>

                <div>
                    <lable>
                        Adds is Updated
                    </lable>

                    <button>
                        Add ADDS
                    </button>
                </div>

            </div>

        </>
    )
}

export default Add_ads