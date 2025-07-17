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
  category?: string; // Add category field
}

export interface IComment {
  id: number;
  content: string;
  author: IUser;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICategory {
  id: number;
  title: string;
}
