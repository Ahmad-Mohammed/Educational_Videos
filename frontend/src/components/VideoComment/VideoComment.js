import { Link } from "react-router-dom";
import "./VideoComment.css";
import { useContext } from "react";
import { VideoContext } from "../../Pages/VideoPage/VideoPage";
const VideoComment = (props) => {
  const { video } = useContext(VideoContext);
  // console.log(video)
  return (
    <>
      <div class=" single-video-author box mb-3">
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
        <small>3 hours ago</small>

        <div class="card w-100">
          <div class="card-body p-4">
            <div>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                vulputate at, tempus
              </p>

              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center pt-4">
                  <a href="#!" class="link-muted me-2">
                    <i class="fas fa-thumbs-up me-1"></i>132
                  </a>
                  <a href="#!" class="link-muted pl-4">
                    <i class="fas fa-thumbs-down me-1"></i>15
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoComment;
