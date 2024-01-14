import "./RightSide.css";
import { VideoMiniCard } from "../../components/index";
import { useContext, useEffect, useState } from "react";
import { VideoPlaylistContext } from "../../Pages/VideoPage/VideoPage";

const RightSide = () => {
  const [videos, setVideos] = useState([]);
  const {video} = useContext(VideoPlaylistContext) ;
  useEffect(() => {
    setVideos(video.videosPlayList);
  }, []);

//  const x = video.videosPlayList ;
  // console.log(video.videosPlaylist);
  return (
    <div class="col-md-3">
      <div class="single-video-right">
        <div class="row">
            <h6 class="head">Videos In Playlist</h6>
            {video.videosPlaylist?.map((video) => (
              <VideoMiniCard video={video} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default RightSide;
