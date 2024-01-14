import { Link } from "react-router-dom";
import "./VideoMiniCard.css";
const VideoMiniCard = (props) => {
  // console.log(props.video);
  return (
    <div class="video-card video-card-list">
      <Link to={`/video-page/${props.video.id}`}>
        <div class="video-card-image">
          <img
            class="card-img"
            src={`http://127.0.0.1:8000/storage/video/image/${props.video.image}`}
          />
        </div>

        <div class="video-card-body">
          <br />
          <div class="video-title">{props.video.title}</div>
          <div class="video-view">{props.video.views} : Views</div>
        </div>
      </Link>
    </div>
  );
};

export default VideoMiniCard;
