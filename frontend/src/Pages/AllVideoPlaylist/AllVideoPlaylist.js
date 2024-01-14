import axios from "axios";
import { VideoCard } from "../../components";
import "./AllVideoPlaylist.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AllVideoPlaylist = () => {
  const [playlist, setPlaylist] = useState("");
  const [videos, setVideos] = useState([]);
  const { title } = useParams();


  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    await axios.get("http://127.0.0.1:8000/api/playlist/" + title).then(({ data }) => {
      setPlaylist(data.data);
      setVideos(data.data.videos);
      // console.log(data);
      // console.log(data.data.videos);

    });
  };


  return (
    <div id="content-wrapper">
      <div class="container-fluid">
        <div class="video-block section-padding">
          <h3 class="">playlist : {playlist.title}</h3>

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

export default AllVideoPlaylist;
