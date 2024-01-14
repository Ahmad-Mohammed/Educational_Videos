// import { useContext } from "react";
import "./LeatstVideoCard.css";
import { Link } from "react-router-dom";
// import { teacherContext } from "../../Pages/Home/Home";

const LeatstVideoCard = (props) => {
  // const { channels } = useContext(teacherContext);

  return (
    <div className="live-card">
      <Link to={`/video-page/${props.video.id}`}>
        <div className="card-head">
          <img
            src={`http://127.0.0.1:8000/storage/video/image/${props.video.image}`}
            alt=""
            className="card-img"
          />

          <div className="play">
            <ion-icon name="play-circle-outline"></ion-icon>
          </div>
        </div>

        <div className="card-body">
          <img
            src={`http://127.0.0.1:8000/storage/teacher/teacher_image/${props.video.teacher_image}`}
            alt=""
            className="v"
          />
          <h3 className="card-title">{props.video.title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default LeatstVideoCard;
