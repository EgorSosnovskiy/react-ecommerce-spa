export const renderRatingStars = (rating) => {
  const roundedRating = Math.round(rating);

  return '⭐'.repeat(roundedRating);
};
