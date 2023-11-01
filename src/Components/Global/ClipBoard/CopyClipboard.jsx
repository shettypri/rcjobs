import InnerCopy from "./InnerCopy"


const CopyClipboard = ({ val, LinkToFollow }) => {
    return (
        <>
            {
                val === "Affliate" ? (
                    <div className="w-full border border-black max-sm:h-10 max-sm:w-[350px]">
                    <section
                className= " text-[4px] py-2 px-0 font font-extrabold max-sm:text-[10px] max-sm:py-0 max-sm:px-2  flex flex-row  max-sm:w-[380px] max-xl:w-[320px] max-xl:text-[10px] max-2xl:w-full max-2xl:text-[12px] 2xl:text-[14px] max-lg:w-48 max-md:w-full " 
                   
            >
               <InnerCopy LinkToFollow={LinkToFollow} cssValue={val} /> 
            </section>
                        
                    </div>
                ) : (
                    <>
                    <section
                className="border border-gray-800 flex flex-row text-sm font-bold max-lg:text-[12px]"
                
            >
                 <InnerCopy LinkToFollow={LinkToFollow} cssValue={val}/> 
            </section>

                    </>
                )


            }
            
        </>
    )
}

export default CopyClipboard