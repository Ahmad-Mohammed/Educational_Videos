import "./SingleChannelImage.css";

import img from "../../assets/images/channel-banner.png";
import img1 from "../../assets/images/s2.png";
import { useContext } from "react";
import { TeacherContext } from "../../Pages/SingleChannel/SingleChannel";

const SingleChannelImage = (props) => {
  const { teacher } = useContext(TeacherContext);

  // console.log(teacher.channel_image);
  return (
    <div class="single-channel-image">
      <form enctype="multipart/form-data">
        <input type="file" id="file-input" />
        <label for="file-input" class="file-button">
          <img
            class="img-fluid "
            alt=""
            src={`http://127.0.0.1:8000/storage/teacher/channel_image/${teacher.channel_image}`}
          />
        </label>
      </form>

      <div class="channel-profile ">
        <img
          class="channel-profile-img"
          alt=""
          src={`http://127.0.0.1:8000/storage/teacher/teacher_image/${teacher.teacher_image}`}
        />
      </div>
    </div>
  );
};

export default SingleChannelImage;
