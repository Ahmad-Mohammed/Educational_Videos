import "./VideosLeatst.css";
import {LeatstVideoCard} from '../../components/index';
import { useEffect, useState } from "react";
import axios from "axios";

const VideosLeatst = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    await axios.get("http://127.0.0.1:8000/api/latest_videos").then(({ data }) => {
      setVideos(data.data);
      // console.log(data);
      // console.log(data.data);

    });
  };
  return (
    <div className="live-grid">
        {videos.map((video) => (
              <LeatstVideoCard video={video}/>

            ))}

  
    </div>
  );
};

export default VideosLeatst;
