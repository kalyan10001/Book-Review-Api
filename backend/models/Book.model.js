import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  description: String,
}, { timestamps: true });

const Book=mongoose.model('Book', bookSchema);
export default Book;
