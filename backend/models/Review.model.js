import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  rating: { type: Number, min: 1, max: 5 },
  comment: String,
}, { timestamps: true });
const Review=mongoose.model('Review', reviewSchema);
export default Review