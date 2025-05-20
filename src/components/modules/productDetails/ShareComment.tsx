"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { RiShareForwardLine } from "react-icons/ri";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";
const ShareComment = ({ shareUrl }: { shareUrl: string }) => {
  //   console.log("shareUrl", shareUrl);

  const segments = shareUrl.split("/");
  const title = segments[segments.length - 1];
  //   console.log("Game ID:", title);

  return (
    <>
      <div className=" mt-2">
        <Dialog>
          <DialogTrigger>
            <div className=" flex items-center gap-1 text-sm font-normal text-foreground">
              <RiShareForwardLine className=" font-bold text-xl  hover:cursor-pointer hover:text-green-500 hover:scale-110 transition-all duration-200 ease-in-out" />
              <p>Share</p>
            </div>
          </DialogTrigger>
          <DialogContent className="[&>button]:hidden bg-card border-none">
            <div className=" flex items-center justify-center gap-5">
              <div className="Demo__some-network">
                <FacebookShareButton
                  url={shareUrl}
                  className="Demo__some-network__share-button"
                >
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
              </div>
              <div className="Demo__some-network">
                <TelegramShareButton
                  url={shareUrl}
                  title={title}
                  className="Demo__some-network__share-button"
                >
                  <TelegramIcon size={32} round />
                </TelegramShareButton>
              </div>

              <div className="Demo__some-network">
                <TwitterShareButton
                  url={shareUrl}
                  title={title}
                  className="Demo__some-network__share-button"
                >
                  <XIcon size={32} round />
                </TwitterShareButton>
              </div>

              <div className="Demo__some-network">
                <LinkedinShareButton
                  url={shareUrl}
                  className="Demo__some-network__share-button"
                >
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
              </div>

              <div className="Demo__some-network">
                <WhatsappShareButton
                  url={shareUrl}
                  title={title}
                  separator=":: "
                  className="Demo__some-network__share-button"
                >
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
              </div>

              <div className="Demo__some-network">
                <RedditShareButton
                  url={shareUrl}
                  title={title}
                  windowWidth={660}
                  windowHeight={460}
                  className="Demo__some-network__share-button"
                >
                  <RedditIcon size={32} round />
                </RedditShareButton>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default ShareComment;
