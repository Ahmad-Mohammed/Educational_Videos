import "./SingleChannelPlaylist.css";
import { PlaylistCard } from "../../components/index";
import { useContext, useEffect, useState } from "react";
import { TeacherContext } from "../../Pages/SingleChannel/SingleChannel";

const SingleChannelPlaylist = () => {
  const [playlists, setPlaylists] = useState([])

  const { teacher } = useContext(TeacherContext);
  useEffect(() => {
    setPlaylists(teacher.playlists)
  }, []);
  return (
    <div class="container-fluid">
      <div class="video-block section-padding">
        <div class="row">
        {playlists.map((playlist) => (
              <PlaylistCard playlist={playlist}/>
            ))}
        
        </div>
      </div>
    </div>
  );
};

export default SingleChannelPlaylist;
