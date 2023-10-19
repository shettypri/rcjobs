
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookMessengerIcon, FacebookMessengerShareButton, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton, } from "react-share"
import copy from "copy-to-clipboard";
import CopyClipboard from "../ClipBoard/CopyClipboard";

const SocialMedia = ({ LinkToFollow,val,imageUrl }) => {
    const cssForIcons = "max-sm:w-8 max-md:w-8 max-lg:w-8 max-xl:w-10"
    const handleCopyClipboard = () => {
        copy(LinkToFollow)
        alert(`The link is copied to clipboard ${LinkToFollow}`)
    }


    const sizeOfIcons = 62
    return (
        <div className="flex flex-col max-lg:flex-wrap max-xl:w-11/12 max-xl:justify-center">
            <div className={"flex flex-row justify-around flex-wrap max-md:flex-wrap "}>
                {/* {LinkToFollow} */}
                <section className="w-">

                    <FacebookShareButton size={sizeOfIcons}
                        url={`${LinkToFollow}`}
                        media={imageUrl}

                    >
                        <FacebookIcon size={sizeOfIcons} round
                            className={cssForIcons}
                            
                        />
                    </FacebookShareButton>
                </section>

                <section>
                    <FacebookMessengerShareButton
                        url={LinkToFollow}
                        media={imageUrl}
                    >
                        <FacebookMessengerIcon size={sizeOfIcons} round
                            className={cssForIcons}
                        />
                    </FacebookMessengerShareButton>
                </section>

                <section>
                    
                {/* <meta property="og:image" content={imageUrl} /> */}
                    < WhatsappShareButton
                        size={sizeOfIcons}
                        url={LinkToFollow}
                        // url={genrateteLink()}
                        media={imageUrl}
                        // separator=""
                        // title={imageUrl}
                    >
                        <WhatsappIcon size={sizeOfIcons} round className={cssForIcons} 
                        
                        />
                    </WhatsappShareButton>
                </section>

                <section>
                    <TwitterShareButton
                        url={LinkToFollow}
                        media={imageUrl}
                    >
                        <TwitterIcon
                            className={cssForIcons}
                            size={sizeOfIcons} round />
                    </TwitterShareButton>
                </section>
                <section>
                    <TelegramShareButton
                        url={LinkToFollow}
                        media={imageUrl}
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
                        media={imageUrl}
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
                        media={imageUrl}
                    >
                        <EmailIcon
                            className={cssForIcons}
                            size={sizeOfIcons} round />
                    </EmailShareButton>
                </section>

            </div>

            <div className=" py-2 mx-0 flex flex-row ">

                <CopyClipboard val={val} LinkToFollow={LinkToFollow} />
            </div>
        </div>
    )
}

export default SocialMedia
