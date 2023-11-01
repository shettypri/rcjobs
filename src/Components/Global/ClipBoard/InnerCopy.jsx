
import copy from "copy-to-clipboard";

const InnerCopy = ({ LinkToFollow, cssValue }) => {
    const handleCopyClipboard = () => {
        copy(LinkToFollow)
        alert(`The link is copied to clipboard ${LinkToFollow}`)
    }
    return (
        <>
            {
                cssValue === "Affliate" ? (
                    <div className="flex max-sm:justify-around justify-between w-full ">
                        <section className="flex flex-wrap max-sm:text-[12px] max-md:text-[12px] text-[18px] max-sm:mt-2 ">Click to copy the link</section>
                        <section className="text-2xl cursor-pointer max-md:text-xl"
                            onClick={handleCopyClipboard}
                        >&#128203;
                        </section>
                    </div>
                ) : (
                    <>
                        <section className="flex flex-wrap ">{`${LinkToFollow}`}</section>
                        <section className="text-2xl cursor-pointer max-md:text-xl"
                            onClick={handleCopyClipboard}
                        >&#128203;
                        </section>
                    </>
                )

            }

        </>
    )
}

export default InnerCopy