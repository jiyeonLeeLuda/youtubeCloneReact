import React from 'react';

const VideoViewer = (props) => {
  const {
    videoId = 'LB0cgXyXl88',
    title = '영상 제목',
    publishedAt = '발행 날짜',
  } = props.video;
  return (
    <div>
      <iframe
        id='ytplayer'
        type='text/html'
        width='720'
        height='405'
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder='0'
        allowFullScreen
        title={title}
      ></iframe>
      <h3>{title}</h3>
      <h5>{publishedAt}</h5>
    </div>
  );
};

export default VideoViewer;
