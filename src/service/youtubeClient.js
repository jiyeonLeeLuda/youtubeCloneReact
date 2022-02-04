import axios from 'axios';

class YoutubeClient {
  constructor(apiKey) {
    this.youtubeClient = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: { key: apiKey },
    });
  }

  async popular() {
    const res = await this.youtubeClient.get('videos', {
      params: {
        part: 'snippet',
        maxResults: 25,
        chart: 'mostPopular',
      },
    });
    if (res.status === 200) {
      return res['data']['items'];
    } else {
      console.log('error', res);
    }
  }
  async search(keyword) {
    const res = await this.youtubeClient.get('search', {
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: keyword,
      },
    });
    if (res.status === 200) {
      const videos = await res.data.items.map((item) => ({
        ...item,
        id: item.id.videoId,
      }));
      return videos;
    } else {
      console.log(Promise.reject(res));
    }
  }
}

export default YoutubeClient;
