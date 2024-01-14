import "./LeftSide.css";
import {
  VideoPlayer,
  VideoTitle,
  VideoAuther,
  VideoContent,
  VideoComment,
} from "../../components/index";
import { useContext, useEffect, useState } from "react";
import { VideoContext } from "../../Pages/VideoPage/VideoPage";
import axios from "axios";

const LeftSide = () => {
  const { video } = useContext(VideoContext);

  const [coments, setComents] = useState([]);
  const [id, setId] = useState("");


  useEffect(() => {
    // setId(video.id);
    // console.log(id);

    fetchComents();
  }, );

  const fetchComents = async () => {
    setId(video.id);
    await axios
      .get("http://127.0.0.1:8000/api/comments/video/" + id)
      .then(({ data }) => {
        setComents(data.data);
        // console.log(data.data);
      });
  };

  return (
    <div class="col-md-9">
      <div class="single-video-left">
        <VideoPlayer />
        <VideoTitle />
        <VideoAuther />
        <VideoContent />
        <VideoComment />
      </div>
    </div>
  );
};

export default LeftSide;
