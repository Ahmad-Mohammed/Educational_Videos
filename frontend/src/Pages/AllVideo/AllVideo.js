import axios from "axios";
import { VideoCard } from "../../components";
import "./AllVideo.css";
import { useEffect, useState } from "react";

const AllVideo = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    await axios.get("http://127.0.0.1:8000/api/videos").then(({ data }) => {
      setVideos(data.data);
      // console.log(data);
      // console.log(data.data.length);

    });
  };


  return (
    <div id="content-wrapper">
      <div class="container-fluid">
        <div class="video-block section-padding">
          {/* <h3 class="">category : </h3> */}

          <div class="row mt-5">
            {videos.map((video) => (
              <VideoCard video={video}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllVideo;
