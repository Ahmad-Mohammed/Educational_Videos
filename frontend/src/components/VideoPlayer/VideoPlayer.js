import { useContext } from "react";
import "./VideoPlayer.css";
import { VideoContext } from "../../Pages/VideoPage/VideoPage";
const VideoPlayer = (props) => {
  const { video } = useContext(VideoContext);
  // console.log(video.video);

  return (
    <div class="single-video">
      <video
        width="100%"
        height="400"
        poster={`http://127.0.0.1:8000/storage/video/image/${video.image}`}
        preload="none"
        controls
        playsinline
        webkit-playsinline
      >
        <source
          src={`http://127.0.0.1:8000/storage/video/video/${video.video}`}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoPlayer;
