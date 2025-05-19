"use client";
import { TUserProps } from "@/types/user";
import CommentsSection from "./Comments";
import UserCommentBox from "./UserCommentBox";
import { TGame } from "@/types/games";

type UserActivitiesProps = {
  session: TUserProps | null;
  gameDetails: TGame | null;
};

const UserActivities = ({ session, gameDetails }: UserActivitiesProps) => {
  return (
    <>
      <div>
        <UserCommentBox session={session} gameDetails={gameDetails} />
        <CommentsSection commentData={gameDetails} session={session} />
      </div>
    </>
  );
};

export default UserActivities;
