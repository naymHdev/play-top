"use client";
import CommentsSection from "./Comments";
import UserCommentBox from "./UserCommentBox";

const UserActivities = () => {
  return (
    <>
      <div>
        <UserCommentBox />
        <CommentsSection />
      </div>
    </>
  );
};

export default UserActivities;
