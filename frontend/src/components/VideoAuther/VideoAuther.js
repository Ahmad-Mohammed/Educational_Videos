import { useContext } from "react";
import "./VideoAuther.css";
import { VideoContext } from "../../Pages/VideoPage/VideoPage";
import { Link } from "react-router-dom";
const VideoAuther = () => {
  const { video } = useContext(VideoContext);
  return (
    <div class="single-video-author box mb-3">
      <form class="">
        <div class="float-right">
          <button class="btn button" type="button">
            Subscribe <strong>1.4M</strong>
          </button>
        </div>
      </form>
      <img
        class="img-fluid"
        src={`http://127.0.0.1:8000/storage/teacher/teacher_image/${video.teacher_image}`}
        alt=""
      />
      <div>
        <Link to="#">
          <strong>{video.teacher_name}</strong>
        </Link>
      </div>
      <small>.</small>
    </div>
  );
};

export default VideoAuther;
