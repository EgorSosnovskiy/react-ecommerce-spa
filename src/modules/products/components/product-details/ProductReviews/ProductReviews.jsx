import ReviewCard from '../ReviewCard/ReviewCard.jsx';
import styles from './ProductReviews.module.css';

export default function ProductReviews({ reviews }) {
  return (
    <section className={styles.reviews}>
      <h2 className={styles.title}>Reviews</h2>

      {reviews.length === 0 ? (
        <div className={styles.empty}>No reviews yet.</div>
      ) : (
        <div className={styles.list}>
          {reviews.map((review) => (
            <ReviewCard
              key={`${review.reviewerName}-${review.date}`}
              review={review}
            />
          ))}
        </div>
      )}
    </section>
  );
}
