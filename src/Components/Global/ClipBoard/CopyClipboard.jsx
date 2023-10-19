import InnerCopy from "./InnerCopy"


const CopyClipboard = ({ val, LinkToFollow }) => {
    return (
        <>
            {
                val === "Affliate" ? (
                    <>
                    <section
                className= "border border-gray-800 text-[4px] py-2 px-0 font font-extrabold max-sm:text-[12px] flex flex-row max-sm:-ml-4 max-sm:w-[481px] max-xl:w-[420px] max-xl:text-[10px] max-2xl:w-full max-2xl:text-[12px] 2xl:text-[14px]" 
                   
            >
               <InnerCopy LinkToFollow={LinkToFollow} /> 
            </section>
                        
                    </>
                ) : (
                    <>
                    <section
                className="border border-gray-800 flex flex-row text-sm font-bold max-lg:text-[12px]"
                
            >
                 <InnerCopy LinkToFollow={LinkToFollow} /> 
            </section>

                    </>
                )


            }
            
        </>
    )
}

export default CopyClipboard