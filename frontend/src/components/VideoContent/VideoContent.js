import { Link } from "react-router-dom";
import "./VideoContent.css";
import { useContext } from "react";
import { VideoContext } from "../../Pages/VideoPage/VideoPage";
const VideoContent = (props) => {
  const { video } = useContext(VideoContext);
  // console.log(video)
  return (
    <div class="single-video-info-content box mb-3">
      <h5 class="head">About :</h5>
      <div>{video.description}</div>
      <br />
      <h5 class="head">Tags :</h5>
      <div>
        {video.tags?.map((tag) => (
          <span>
            <a href={tag.link}>{tag.link}</a>
          </span>
        ))}
      </div>
      <br />
      <h5 class="head">Category :</h5>
      <p class="tags ">
        {video.categories?.map((category) => (
          <span>
            <Link to="/all-video">{category.name}</Link>
          </span>
        ))}
      </p>
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
        <div class="form-outline w-100">
          <textarea
            class="h"
            id="textAreaExample"
            rows="4"
            //  style="background: #fff;"
          ></textarea>
        </div>
        <div class="float-end mt-2 pt-1 pl-5">
          <button type="submit" class="btn button">
            Post comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoContent;
