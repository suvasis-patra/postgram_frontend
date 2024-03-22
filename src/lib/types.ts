export interface NewUser {
  username: string;
  name: string;
  email: string;
  password: string;
}

export interface LinkPorsps {
  imgURL: string;
  route: string;
  label: string;
}

export interface PostProps {
  caption: string;
  file: File;
  tag: string;
  location: string;
}

export interface Post {
  caption: string;
  imageUrl: string;
  tags: string[];
  location: string;
  creator: string;
  likes: number;
  _id: string;
  createdAt: string;
  creatorInfo?: CreatorInfo[];
}

export interface CreatorInfo {
  _id: string;
  username: string;
  name: string;
  imageUrl?: string | undefined;
  saved?: string[];
  liked?: string[];
  posts?: string[];
}

export interface userInfo extends CreatorInfo {
  _id: string;
  email: string;
  bio?: string;
}

export interface TopCreatorInfo {
  _id: string;
  totalPosts: number;
  user: CreatorInfo;
}

export interface PageParamType {
  pageParam: number;
}
