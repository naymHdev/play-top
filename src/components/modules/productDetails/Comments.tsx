import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { CommentActionProps, TCommentType } from "@/types/comment";
import { TGame } from "@/types/games";
import { TUserProps } from "@/types/user";
import { MdArrowOutward, MdOutlinedFlag } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { upvoteComment } from "@/services/comments";
import toast from "react-hot-toast";
import ShareComment from "./ShareComment";

type CommentsProps = {
  session: TUserProps | null;
  gameDetails: TGame | null;
  commentData: { comments: TCommentType[] };
};

// Utility to calculate "X days ago"
const getTimeAgo = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) return "Today";
  if (diffInDays === 1) return "1 day ago";
  return `${diffInDays} days ago`;
};

const CommentsSection = ({ commentData, session }: CommentsProps) => {
  const comments: TCommentType[] = commentData?.comments || [];
  // console.log("commentData", comments);
  // console.log("session", session);

  const handleUpvote = async (commentId: string) => {
    const upvotedData = {
      data: {
        gameId: commentData?.id as string,
        commentId: commentId,
      },
    };
    // console.log("upvotedData", upvotedData);

    try {
      const res = await upvoteComment(upvotedData);
      // console.log("Upvote response:", res);

      if (res.success) {
        toast.success("Comment upvoted successfully!");
      } else {
        toast.error("Failed to upvote comment.");
      }
    } catch (error) {
      console.error("Error upvoting comment:", error);
    }
  };

  return (
    <section className="mt-10 space-y-6">
      <h3 className="text-foreground font-semibold uppercase text-sm">
        Comments ({comments.length})
      </h3>

      {comments
        .slice()
        .reverse()
        .slice(0, 10)
        .map((comment, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0">
              <Avatar className="w-12 h-12">
                <AvatarImage
                  src={session?.user?.image}
                  alt={session?.user?.name}
                />
                <AvatarFallback>
                  <FaUser />
                </AvatarFallback>
              </Avatar>
            </div>

            <div className="flex flex-col">
              <div className="">
                <h4 className="font-semibold text-primary">
                  {session?.user?.name}
                </h4>
                <p className="text-muted-foreground text-xs font-medium">
                  {getTimeAgo(comment.createdAt)}
                </p>
              </div>
              <p className=" mt-2 font-normal text-primary/90 leading-7">
                {comment.comment}
              </p>
              <div>
                <Separator className="my-4 bg-foreground w-full" />
                <div className=" flex items-center justify-start gap-3">
                  <div className=" flex items-center gap-1 text-sm font-normal text-foreground">
                    <button
                      onClick={() => handleUpvote(comment?.id)}
                      className=" hover:cursor-pointer hover:text-green-500 hover:scale-110 transition-all duration-200 ease-in-out"
                    >
                      <MdArrowOutward className=" font-bold text-xl" />
                    </button>
                    <p>Upvote ({comment?.totalUpvote})</p>
                  </div>
                  <ShareComment shareUrl={window.location.href} />
                  <div className=" flex items-center gap-1 text-sm font-normal text-foreground">
                    <MdOutlinedFlag className=" font-bold text-xl" />
                    <p>Report</p>
                  </div>
                </div>
              </div>

              {/* {comment.replies.length > 0 && (
              <div className="mt-5 space-y-3 pl-6">
                {comment.replies.map((reply, idx) => (
                  <div key={idx}>
                    <div className=" flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <Avatar className="w-12 h-12">
                          <AvatarImage
                            src={reply.userImg}
                            alt={reply.userName}
                          />
                          <AvatarFallback>
                            {reply.userName
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">
                          {reply.userName}
                        </h4>
                        <p className="text-muted-foreground text-xs font-medium">
                          {getTimeAgo(reply.createdAt)}
                        </p>
                      </div>
                    </div>
                    <p className=" mt-2 font-normal text-primary/90 ml-16">
                      {reply.comment}
                    </p>
                  </div>
                ))}
                <div className=" ml-15">
                  <Separator className="my-4 bg-foreground w-full" />
                  <div className=" flex items-center justify-start gap-3">
                    <div className=" flex items-center gap-1 text-sm font-normal text-foreground">
                      <MdArrowOutward className=" font-bold text-xl" />{" "}
                      <p>Upvote (10)</p>
                    </div>
                    <div className=" flex items-center gap-1 text-sm font-normal text-foreground">
                      <RiShareForwardLine className=" font-bold text-xl" />
                      <p>Share</p>
                    </div>
                    <div className=" flex items-center gap-1 text-sm font-normal text-foreground">
                      <MdOutlinedFlag className=" font-bold text-xl" />
                      <p>Report</p>
                    </div>
                  </div>
                </div>
              </div>
            )} */}
            </div>
          </div>
        ))}

      {/* ---- More comments ---- */}
      <div className=" flex flex-col items-center justify-center rounded-md bg-card text-primary/90 w-full py-4 hover:cursor-pointer">
        {comments?.length} more comments
      </div>
    </section>
  );
};

export default CommentsSection;
