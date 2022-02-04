import React, { useEffect, useState } from 'react';
import VideoViewer from '../components/video-viewer/videoViewer';
import styles from './home.module.css';
import NavBar from '../components/navBar';
import VideoList from '../components/video-list/videoList';

const Home = ({ youtube }) => {
  const [keyword, setKeyword] = useState('');
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState(null);

  const handleChangeKeyword = (keyword) => {
    setKeyword(keyword);
  };
  const handleClickLogo = () => {
    setVideo(null);
    setKeyword('');
  };
  const handleClickVideo = (video) => {
    setVideo(video);
  };

  useEffect(() => {
    async function getData() {
      if (keyword) {
        const videos = await youtube.search(keyword);
        setVideos(videos);
      } else {
        const videos = await youtube.popular();
        setVideos(videos);
      }
    }

    getData();
  }, [keyword, youtube]);
  return (
    <div className={styles.home}>
      <NavBar
        onClickLogo={handleClickLogo}
        onChangeSearch={handleChangeKeyword}
      />
      <section className={styles.content}>
        {video && (
          <div className={styles.detail}>
            <VideoViewer video={video} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            handleClickVideo={handleClickVideo}
            display={video ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
