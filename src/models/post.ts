import { IUser } from './user';

export interface IPost {
  id: number;
  title: string;
  content: string;
  description: string;
  comments: IComment[];
  author: IUser;
  createdAt: Date;
  updatedAt: Date;
  headerImageUrl: string;
}

export interface IComment {
  id: number;
  content: string;
  author: IUser;
  createdAt: Date;
  updatedAt: Date;
}
