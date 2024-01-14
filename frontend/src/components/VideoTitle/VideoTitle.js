import { useContext } from "react";
import { VideoContext } from "../../Pages/VideoPage/VideoPage";
import "./VideoTitle.css";
const VideoTitle = (props) => {
  const { video } = useContext(VideoContext);
  // console.log(video)
  return (
    <div class="single-video-title box mb-3">
      <h2>{video.title}</h2>
      <div>
        <span>
          <i class="fas fa-calendar-alt"></i> {video.date}
        </span>
        &nbsp; &nbsp; &nbsp;
        <span>
          <i class="fas fa-eye"></i> {video.views} views
        </span>
        <span class="d-flex align-items-center">
          <a href="#!" class="link-muted me-2">
            <i class="fas fa-thumbs-up me-1"></i>132
          </a>
          <a href="#!" class="link-muted">
            <i class="fas fa-thumbs-down me-1"></i>15
          </a>
        </span>
      </div>
    </div>
  );
};

export default VideoTitle;
