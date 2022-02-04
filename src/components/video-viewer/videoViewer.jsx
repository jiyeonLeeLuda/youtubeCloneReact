import React from 'react';
import styles from './videoViewer.module.css';
const VideoViewer = ({ video: { snippet, id: videoId } }) => {
  const { title, publishedAt, description } = snippet;
  return (
    <div className={styles.viewer}>
      <iframe
        id='ytplayer'
        type='text/html'
        width='100%'
        height='500'
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder='0'
        allowFullScreen
        title='youtube player'
      ></iframe>
      <h3>{title}</h3>
      <h5>{publishedAt}</h5>
      <pre className={styles.description}>{description}</pre>
    </div>
  );
};

export default VideoViewer;
