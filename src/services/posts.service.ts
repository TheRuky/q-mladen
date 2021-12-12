import { Post } from "@/interfaces/post";
import { Comment } from "@/interfaces/comment";

const API_URL = 'https://jsonplaceholder.typicode.com';

export const getPosts = (): Promise<Post[]> => {
  return fetch(`${API_URL}/posts`).then(r => r.json());
};

export const getPost = (id: number | string): Promise<Post> => {
  return fetch(`${API_URL}/posts/${id}`).then(r => r.json());
};

export const getComments = (id: number | string): Promise<Comment[]> => {
  return fetch(`${API_URL}/posts/${id}/comments`).then(r => r.json());
}