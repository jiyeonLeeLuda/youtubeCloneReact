import React from 'react';
import styles from './thumbnailCard.module.css';

const ThumbnailCard = ({ video, onClick, display }) => {
  const {
    snippet: { title, thumbnails, channelTitle },
  } = video;
  const displayType = display === 'list' ? styles.list : styles.grid;

  const thumbnail = thumbnails.medium.url;
  return (
    <li
      className={`${styles.container} ${displayType}`}
      onClick={() => {
        onClick(video);
      }}
    >
      <div className={styles.video}>
        <img className={styles.thumbnail} src={thumbnail} alt='thumnail' />
        <div className={styles.metadata}>
          <p className={styles.title}>{title}</p>
          <p className={styles.channel}>{channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default ThumbnailCard;
