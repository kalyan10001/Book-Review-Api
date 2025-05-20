import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import { deleteReview, updateReview } from '../controllers/review.controller.js';

const ReviewRouter = express.Router();

ReviewRouter.put('/:id', verifyToken, updateReview);
ReviewRouter.delete('/:id', verifyToken, deleteReview);

export default ReviewRouter;
