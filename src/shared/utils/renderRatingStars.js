import { Icons } from '../constants/icons.js';

export const renderRatingStars = (rating) => {
  const roundedRating = Math.round(rating);

  return Icons.star.repeat(roundedRating);
};
