import "./SingleChannelVideos.css";
import { VideoCard} from "../../components/index";
import { useContext, useEffect, useState } from "react";
import { TeacherContext } from "../../Pages/SingleChannel/SingleChannel";


const SingleChannelVideos = () => {
    const [videos, setVideos] = useState([])

  const { teacher } = useContext(TeacherContext);
  useEffect(() => {
    setVideos(teacher.videos)
  }, []);
  return (
    <div class="container-fluid">
          <div class="video-block section-padding">
            <div class="row">
            {videos.map((video) => (
              <VideoCard video={video}/>
            ))}
           
            </div>
          </div>
        </div>
  );
};

export default SingleChannelVideos;
