import axios from "axios";
import { useEffect, useState } from "react";




interface YouTubeVideo {
  contentDetails: {
    caption: string;
    contentRating: object;
    definition: string;
    dimension: string;
    duration: string;
    licensedContent: boolean;
    projection: string;
  };
  etag: string;
  id: string;
  kind: string;
  snippet: {
    categoryId: string;
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    localized: {
      description: string;
      title: string;
    };
    publishedAt: string;
    tags: string[];
    thumbnails: {
      default: { height: number; url: string; width: number };
      high: { height: number; url: string; width: number };
      maxres: { height: number; url: string; width: number };
      medium: { height: number; url: string; width: number };
      standard: { height: number; url: string; width: number };
    };
    title: string;
  };
  statistics: {
    commentCount: string;
    favoriteCount: string;
    likeCount: string;
    viewCount: string;
  };
}


const YouTubeApi = () => {
  const [data, setData] = useState([]);
  const apiKey = "AIzaSyCx9t7NcK6sTXBN6F4Bkej78Ww-FV8vtMU";
  const maxResults = 50;

  
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=${maxResults}&regionCode=US&key=${apiKey}`
      )
      .then(response => {
        const videoIds = response.data.items.map((item : YouTubeVideo) => item.id)
        return axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoIds.join(",")}&key=${apiKey}`);
      })
      .then(response => {
        console.log(response.data.items)
        setData(response.data.items);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  

  return (
    <div>sldjfsdkjv</div>
  );
};

export default YouTubeApi;


