import { useState } from 'react';

import styles from './ProductGallery.module.css';

export default function ProductGallery({ images, title }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={styles.gallery}>
      <div className={styles.thumbnails}>
        {images.map((image, index) => (
          <button
            key={image}
            className={
              activeImageIndex === index
                ? `${styles.thumbnail} ${styles.active}`
                : styles.thumbnail
            }
            onMouseEnter={() => setActiveImageIndex(index)}
          >
            <img src={image} alt={`${title} thumbnail`} />
          </button>
        ))}
      </div>

      <div className={styles.main}>
        <button className={styles.arrow} onClick={handlePrev}>
          ←
        </button>

        <img
          className={styles.mainImage}
          src={images[activeImageIndex]}
          alt={title}
        />

        <button className={styles.arrow} onClick={handleNext}>
          →
        </button>
      </div>
    </section>
  );
}
