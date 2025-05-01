export interface IUser {
    userId?: string;
    name?: string;
    email: string;
    password: string;
    role: string;
    bio?: string;
    links?: string[];
    photo?: string;
    approvedUpdate: boolean;
    uploadedGame?: string[];
    isDeleted?: boolean;
  }