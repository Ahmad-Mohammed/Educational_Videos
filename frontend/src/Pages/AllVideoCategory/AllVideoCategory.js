import axios from "axios";
import { VideoCard } from "../../components";
import "./AllVideoCategory.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AllVideoCategory = () => {
  const [category, setCategory] = useState("");
  const [videos, setVideos] = useState([]);
  const { name } = useParams();

  // console.log(name);

  useEffect(() => {
    fetchVideos();
  }, [
  
  
  ]);

  const fetchVideos = async () => {
    await axios.get("http://127.0.0.1:8000/api/category/" + name).then(({ data }) => {
      setCategory(data.data);
      setVideos(data.data.videos);
      // console.log(data);
      // console.log(data.data.videos);

    });
  };


  return (
    <div id="content-wrapper">
      <div class="container-fluid">
        <div class="video-block section-padding">
          <h3 class="">category : {category.name}</h3>

          <div class="row mt-5">
            {videos.map((video) => (
              <VideoCard video={video}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllVideoCategory;
