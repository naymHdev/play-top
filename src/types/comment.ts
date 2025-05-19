export type TCommentType = {
  userId: string;
  comment: string;
  commentTime: string; // ISO date string
  upvote: string[]; // array of user IDs or similar
  totalUpvote: number;
  report: string[]; // array of user IDs or reasons
  createdAt: string; // ISO date string
  _id: string;
  id: string;
};
