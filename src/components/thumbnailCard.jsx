import React from 'react';
import styles from './thumbnailCard.module.css';

const ThumbnailCard = (props) => {
  const { thumbnail, video, onClick } = props;
  const { title, publishedAt } = video;
  return (
    <li
      className={styles.container}
      onClick={() => {
        onClick(video);
      }}
    >
      <img src={thumbnail} alt='thumnail' className='thumnail' />
      <div className={styles.infos}>
        <p className={styles.title}>{title}</p>
        <p className={styles.publishedAt}>{publishedAt}</p>
      </div>
    </li>
  );
};

export default ThumbnailCard;
