export interface TBlogs {
  _id: string;
  title: string;
  description: string;
  author: string;
  blogImage: string;
  createdAt: Date;
  isDeleted: boolean;
  id?: string;
}

export type BlogFormInputs = {
  author: string;
  title: string;
  description: string;
};
