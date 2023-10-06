import { Link } from "react-router-dom"
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookMessengerIcon, FacebookMessengerShareButton, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton, } from "react-share"


const SocialMedia = ({ LinkToFollow }) => {
    const sizeOfIcons = 62
    return (
        <div className="flex flex-row justify-around flex-wrap ">
            {/* {LinkToFollow} */}
            <section className="">

                <FacebookShareButton size={sizeOfIcons}
                    url={`${LinkToFollow}`}

                >
                    <FacebookIcon size={sizeOfIcons} round />
                </FacebookShareButton>
            </section>

            <section>
                <FacebookMessengerShareButton
                url={LinkToFollow}
                >
                    <FacebookMessengerIcon size={sizeOfIcons} round />
                </FacebookMessengerShareButton>
            </section>

            <section>
                < WhatsappShareButton
                    size={sizeOfIcons}
                    url={LinkToFollow}
                >
                    <WhatsappIcon size={sizeOfIcons} round />
                </WhatsappShareButton>
            </section>

            <section>
                <TwitterShareButton
                url={LinkToFollow}
                >
                    <TwitterIcon 
                    size={sizeOfIcons} round />
                </TwitterShareButton>
            </section>
            <section>
                <TelegramShareButton
                url={LinkToFollow}
                
                >
                    <TelegramIcon
                    size={sizeOfIcons} round 
                    className=""
                    />
                </TelegramShareButton>
            </section>

            <section>
                <LinkedinShareButton
                url={LinkToFollow}
                >
                <LinkedinIcon 
                 size={sizeOfIcons} round
                />
                </LinkedinShareButton>
            </section>
            <section>
                <EmailShareButton
                url={LinkToFollow}
                >
                    <EmailIcon
                    size={sizeOfIcons} round/>
                </EmailShareButton>
            </section>

        </div>
    )
}

export default SocialMedia
