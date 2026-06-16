import { renderRatingStars } from '../../../../../shared/utils/renderRatingStars.js';
import styles from './ReviewCard.module.css';

export default function ReviewCard({ review }) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <span className={styles.author}>{review.reviewerName}</span>

        <span className={styles.date}>
          {new Date(review.date).toLocaleDateString()}
        </span>

        <span className={styles.rating}>
          {renderRatingStars(review.rating)}
        </span>
      </div>

      <p className={styles.comment}>{review.comment}</p>
    </article>
  );
}
