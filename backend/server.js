import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import AuthRouter from './routes/auth.route.js';
import BookRouter from './routes/book.route.js';
import ReviewRouter from './routes/review.route.js';



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', AuthRouter);
app.use('/api/books',BookRouter);
app.use('/api/reviews',ReviewRouter);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
  });
}).catch((err) => console.log(err));
