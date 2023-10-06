
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookMessengerIcon, FacebookMessengerShareButton, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton, } from "react-share"
import copy from "copy-to-clipboard";

const SocialMedia = ({ LinkToFollow,val }) => {
    const cssForIcons = "max-sm:w-8 max-md:w-8 max-lg:w-8 max-xl:w-10"
    const handleCopyClipboard = () => {
        copy(LinkToFollow)
        alert(`The link is copied to clipboard ${LinkToFollow}`)
    }
    // const verifyLinks = LinkToFollow.split("/anonymous/")[0]
    // console.log(verifyLinks);
    
    


    const sizeOfIcons = 62
    return (
        <div className="flex flex-col max-lg:flex-wrap max-xl:w-11/12 max-xl:justify-center">
            <div className={"flex flex-row justify-around flex-wrap max-md:flex-wrap "}>
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
                        <WhatsappIcon size={sizeOfIcons} round className={cssForIcons} />
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
                    className={val === "Affliate"?"border border-gray-800 text-[4px] py-2 px-0 font font-extrabold max-sm:text-[12px] flex flex-row max-sm:-ml-4 max-sm:w-[481px] max-xl:w-[420px] max-xl:text-[10px]":
                    "border border-gray-800 flex flex-row text-sm font-bold max-lg:text-[12px]"
                }
                    >
                        <section>{ `${LinkToFollow}`}</section>

                    <section className="text-2xl cursor-pointer max-md:text-xl"
                        onClick={handleCopyClipboard}
                    >&#128203;
                    </section>
                </section>
            </div>
        </div>
    )
}

export default SocialMedia
