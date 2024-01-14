import "./VideoCard.css";
import { Link } from "react-router-dom";
import axios from "axios";

const VideoCard = (props) => {
  // console.log(props.video);
  const PlusView = async (e) => {
    await axios
      .get(`http://127.0.0.1:8000/api/video/view/${props.video.id}`)
      .then(() => {
        // Navigate("/video-page");
      })
      .catch(({ response }) => {
     
      });
  };
  return (
    <div class="col-xl-3 col-sm-6 mb-3">
      <div class="video-card" on >
        <Link to={`/video-page/${props.video.id}`} onClick={PlusView}>
          <div class="video-card-image">
            <div class="play-icon">
              <i class="fas fa-play-circle"></i>
            </div>
            <div>
              <img
                class="img-fluid"
                src={`http://127.0.0.1:8000/storage/video/image/${props.video.image}`}
                
                alt=""
              />
            </div>
          </div>
          <div class="video-card-body">
            <div class="video-title">
              <Link to={`/video-page/${props.video.id}`}>{props.video.title}</Link>
            </div>
            <div class="video-page text-success">
              Category : {props.video.views}
            </div>
            <div class="video-view">
              {props.video.views}{" "}views &nbsp;<i class="fas fa-calendar-alt"></i>{" "}
              {props.video.date}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;
