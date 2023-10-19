
import copy from "copy-to-clipboard";

const InnerCopy = ({LinkToFollow}) => {
    const handleCopyClipboard = () => {
        copy(LinkToFollow)
        alert(`The link is copied to clipboard ${LinkToFollow}`)
    }
    return (
        <>
            <section>{`${LinkToFollow}`}</section>
            <section className="text-2xl cursor-pointer max-md:text-xl"
                onClick={handleCopyClipboard}
            >&#128203;
            </section>

        </>
    )
}

export default InnerCopy