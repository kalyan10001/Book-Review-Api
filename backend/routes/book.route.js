import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import { addBook, getBookById, getBooks, searchBooks } from '../controllers/book.controller.js';
import { addReview } from '../controllers/review.controller.js';


const BookRouter = express.Router();

BookRouter.post('/', verifyToken, addBook);
BookRouter.get('/', getBooks);
BookRouter.get('/search', searchBooks);
BookRouter.get('/:id', getBookById);
BookRouter.post('/:id/reviews', verifyToken, addReview); 

export default BookRouter;
