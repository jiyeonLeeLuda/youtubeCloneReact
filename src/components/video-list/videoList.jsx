import React from 'react';
import ThumbnailCard from '../video-item/thumbnailCard';
import styles from './videoList.module.css';

const VideoList = ({ videos, handleClickVideo, display }) => {
  return (
    <ul className={styles.videoList}>
      {videos.map((video) => {
        const { id } = video;
        return (
          <ThumbnailCard
            key={id}
            video={video}
            onClick={handleClickVideo}
            display={display}
          ></ThumbnailCard>
        );
      })}
    </ul>
  );
};

export default VideoList;
