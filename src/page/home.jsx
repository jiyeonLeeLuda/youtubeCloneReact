import React, { useEffect, useState } from 'react';
import ThumbnailCard from '../components/thumbnailCard';
import VideoViewer from '../components/videoViewer';
import styles from './home.module.css';
import NavBar from '../components/navBar';

const Home = (props) => {
  const [keyword, setKeyword] = useState('');
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState({
    isPlayVideo: false,
    videoId: '',
    title: '',
    publishedAt: '',
  });

  const handleChangeKeyword = (keyword) => {
    setKeyword(keyword);
  };
  const handleClickLogo = () => {
    setVideo({ ...video, isPlayVideo: false });
    setKeyword('');
  };
  const handleClickVideo = (video) => {
    const { videoId, title, publishedAt } = video;
    setVideo({
      isPlayVideo: true,
      videoId,
      title,
      publishedAt,
    });
  };

  useEffect(() => {
    const youtubeUrl = 'https://www.googleapis.com/youtube/v3';
    const apiKey = 'AIzaSyCgEsOAqpvHgdVYaQuKCi20fwGATmTETac';

    async function fetchYoutubeSearch(keyword) {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
      const params = {
        key: apiKey,
        part: 'snippet',
        maxResults: 25,
        q: keyword,
      };
      const url =
        youtubeUrl +
        '/search' +
        (youtubeUrl.indexOf('?') === -1 ? '?' : '&') +
        queryParams(params);

      const res = await fetch(url, requestOptions);
      if (res.ok) {
        const datas = await res.json();
        setVideos(datas['items']);
      } else {
        console.log(Promise.reject(res));
      }
    }

    async function fetchYoutubePopular() {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
      const params = {
        key: apiKey,
        part: 'snippet',
        maxResults: 25,
        chart: 'mostPopular',
      };
      const url =
        youtubeUrl +
        '/videos' +
        (youtubeUrl.indexOf('?') === -1 ? '?' : '&') +
        queryParams(params);

      const res = await fetch(url, requestOptions);
      if (res.ok) {
        const datas = await res.json();
        setVideos(datas['items']);
      } else {
        console.log(Promise.reject(res));
      }
    }
    if (keyword) {
      fetchYoutubeSearch(keyword);
    } else {
      fetchYoutubePopular();
    }
  }, [keyword]);
  return (
    <>
      <NavBar
        onClickLogo={handleClickLogo}
        onChangeSearch={handleChangeKeyword}
      />
      <div className={styles.container}>
        {video.isPlayVideo && <VideoViewer video={video} />}

        <ul className={styles.videoList}>
          {videos.map((video) => {
            const { id } = video; //인기영상 목록인 경우
            const { videoId } = video.id; //검색한 경우

            const { title, thumbnails, publishedAt } = video.snippet;
            const videoInfos = {
              videoId: videoId ? videoId : id,
              title,
              publishedAt,
            };
            return (
              <ThumbnailCard
                key={videoId ? videoId : id}
                thumbnail={thumbnails.default.url}
                video={videoInfos}
                onClick={handleClickVideo}
              ></ThumbnailCard>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Home;
function queryParams(params) {
  return Object.keys(params)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
}
