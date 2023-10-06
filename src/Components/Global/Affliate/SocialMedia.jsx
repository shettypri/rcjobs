
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookMessengerIcon, FacebookMessengerShareButton, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton, } from "react-share"
import copy from "copy-to-clipboard";

const SocialMedia = ({ LinkToFollow }) => {
    const cssForIcons = "max-sm:w-8"
    const handleCopyClipboard = () => {
        copy(LinkToFollow)
        alert(`The link is copied to clipboard ${LinkToFollow}`)
    }
    const verifyLinks = "https://earn.rcjobssms.com/anonymous/Ic9V1dq1jIS4mjiwrMUyY4CgIX73NICOZNa754OIARME2aLsOnMkC1"

    const sizeOfIcons = 62
    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-around flex-wrap ">
                {/* {LinkToFollow} */}
                <section className="w-">

                    <FacebookShareButton size={sizeOfIcons}
                        url={`${LinkToFollow}`}

                    >
                        <FacebookIcon size={sizeOfIcons} round
                        className={cssForIcons}
                        />
                    </FacebookShareButton>
                </section>

                <section>
                    <FacebookMessengerShareButton
                        url={LinkToFollow}
                    >
                        <FacebookMessengerIcon size={sizeOfIcons} round 
                         className={cssForIcons}
                        />
                    </FacebookMessengerShareButton>
                </section>

                <section>
                    < WhatsappShareButton
                        size={sizeOfIcons}
                        url={LinkToFollow}
                    >
                        <WhatsappIcon size={sizeOfIcons} round  className={cssForIcons} />
                    </WhatsappShareButton>
                </section>

                <section>
                    <TwitterShareButton
                        url={LinkToFollow}
                    >
                        <TwitterIcon
                         className={cssForIcons}
                            size={sizeOfIcons} round />
                    </TwitterShareButton>
                </section>
                <section>
                    <TelegramShareButton
                        url={LinkToFollow}

                    >
                        <TelegramIcon
                         className={cssForIcons}
                            size={sizeOfIcons} round
                            
                        />
                    </TelegramShareButton>
                </section>

                <section>
                    <LinkedinShareButton
                        url={LinkToFollow}
                    >
                        <LinkedinIcon
                         className={cssForIcons}
                            size={sizeOfIcons} round
                        />
                    </LinkedinShareButton>
                </section>
                <section>
                    <EmailShareButton
                        url={LinkToFollow}
                    >
                        <EmailIcon
                         className={cssForIcons}
                            size={sizeOfIcons} round />
                    </EmailShareButton>
                </section>

            </div>

            <div className=" py-2 mx-0 flex flex-row ">
                <section 
                className={LinkToFollow === verifyLinks ?
                "border border-gray-800 text-[14px] py-2 px-0 font font-extrabold max-sm:text-[12px] flex flex-row max-sm:-ml-4 max-sm:w-[350px]"
                 :
                "border border-gray-800 text-[14px] py-2 px-0 font font-extrabold max-sm:text-[12px] flex flex-row ml-0"}>
                    <section className={LinkToFollow === verifyLinks ?" text-center max-sm:text-[8.5px]":"" }>
                    &quot; {LinkToFollow} &quot;</section>
                    <section className="text-lg cursor-pointer"
                    onClick={handleCopyClipboard}
                    >&#128203;
                    </section>
                </section>
                {/* <section className="bg-black text-white w-3/12 rounded-lg px-4 mx-4 my-2 max-sm:text-[15px] cursor-pointer"
                    onClick={handleCopyClipboard}
                >
                
                    &#128203;
                </section> */}
            </div>
        </div>
    )
}

export default SocialMedia
