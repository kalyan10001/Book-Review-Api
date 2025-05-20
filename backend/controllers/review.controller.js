import Review from "../models/Review.model.js";

export const addReview = async (req, res) => {
  try {
    const existing = await Review.findOne({ bookId: req.params.id, userId: req.user.id });
    if (existing) return res.status(400).json({ message: 'You already reviewed this book' });

    const review = await Review.create({ ...req.body, bookId: req.params.id, userId: req.user.id });
    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateReview = async (req, res) => {
  try {
    const review = await Review.findOne({ _id: req.params.id, userId: req.user.id });
    if (!review) return res.status(404).json({ message: 'Review not found' });

    review.rating = req.body.rating;
    review.comment = req.body.comment;
    await review.save();
    res.json(review);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteReview = async (req, res) => {
  try {
    const review = await Review.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    if (!review) return res.status(404).json({ message: 'Review not found' });
    res.json({ message: 'Review deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};