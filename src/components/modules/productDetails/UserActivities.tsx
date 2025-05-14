"use client";
import { TUserProps } from "@/types/user";
import CommentsSection from "./Comments";
import UserCommentBox from "./UserCommentBox";

const UserActivities = ({ session }: { session: TUserProps | null }) => {
  return (
    <>
      <div>
        <UserCommentBox session={session} />
        <CommentsSection />
      </div>
    </>
  );
};

export default UserActivities;
