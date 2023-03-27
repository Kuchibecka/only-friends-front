export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Post {
  id: number
  text: string;
  date: number;
  author_name: string;
  author_tag: string;
  liked: boolean;
}
