import express from "express";
import { getFeedPosts, getUserPosts, LikePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();
router.route("/").get(verifyToken, getFeedPosts);
router.route("/:userId/posts").get(verifyToken, getUserPosts);
router.route("/:id/like").patch(verifyToken, LikePost);

export default router;
