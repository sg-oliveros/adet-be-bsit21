import { Hono } from "hono";
import { createPost, deletePostById, getAllPosts, getPostById, updatePostById } from "../controllers/posts.controller.js";

const postsRoute = new Hono();

postsRoute.get('/', getAllPosts);
postsRoute.get('/:id', getPostById);
postsRoute.delete('/:id', deletePostById);
postsRoute.post('/', createPost);
postsRoute.patch('/:id', updatePostById);

export default postsRoute;