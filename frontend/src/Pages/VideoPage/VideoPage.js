import "./VideoPage.css";
import { LeftSide, RightSide } from "../../section/index";
import { useParams } from "react-router-dom";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const VideoContext = createContext();
export const VideoPlaylistContext = createContext();

const VideoPage = () => {
  const { id } = useParams();
  const [video, setVideo] = useState("");


  useEffect(() => {
    fetchVideo();
  }, );

  const fetchVideo = async () => {
    await axios
      .get("http://127.0.0.1:8000/api/video/" + id)
      .then(({ data }) => {
        setVideo(data.data);
        // console.log(data.data);
      });
  };
  // console.log(Video.video);

  return (
    <div id="wrapper">
      <div id="content-wrapper ">
        <div class="container-fluid pb-0">
          <div class="video-block section-padding">
            <div class="row">
              <VideoContext.Provider value={{ video }}>
                <LeftSide />
              </VideoContext.Provider>
              <VideoPlaylistContext.Provider value={{ video }}>
                <RightSide />
              </VideoPlaylistContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
