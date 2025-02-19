export interface IPost {
  id: number;
  title: string;
  content: string;
  description: string;
  comments: any[];
  author: any[];
  createdAt: Date;
  updatedAt: Date;
  headerImageUrl: string;
}
