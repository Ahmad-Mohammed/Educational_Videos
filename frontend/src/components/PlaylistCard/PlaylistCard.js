import "./PlaylistCard.css";
import img2 from "../../assets/images/v1.png";
import { Link } from "react-router-dom";

const PlaylistCard = (props) => {
  return (
    <div class="col-xl-3 col-sm-6 mb-3">
      <div class="video-card2">
        <Link to={`/all-video/${props.playlist.title}`}>
          <div class="video-card-image">
            <div class="play-icon">
              <i class="fas fa-play-circle"></i>
            </div>
            <div>
              <img
                class="img-fluid"
                src={`http://127.0.0.1:8000/storage/teacher/channel_image/${props.playlist.image}`}
                alt=""
              />
            </div>
          </div>
          <div class="video-card-body">
            <div class="video-title">
              <Link to={`/all-video/${props.playlist.title}`}>{props.playlist.title}</Link>
            </div>
            <div class="video-view"></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PlaylistCard;
