import { useEffect, useState } from 'react';

import './app';
import VideoList from './components/video_list/video_list';
import Home from './page/home';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    console.log('useEffect');

    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResult=25&key=AIzaSyCgEsOAqpvHgdVYaQuKCi20fwGATmTETac',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));
  }, []);
  return <VideoList videos={videos}></VideoList>;
}

export default App;
