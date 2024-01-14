import { useEffect, useState } from "react";
import SmallHead from "../SmallHead/SmallHead";
import "./VideoApproval.css";
import axios from "axios";

const VideoApproval = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    await axios
      .get("http://127.0.0.1:8000/api/videos/unpublished")
      .then(({ data }) => {
        setVideos(data.data);
        // console.log(data);
        // console.log(data.data.length);
      });
  };
  const deleteVideo = async (id) => {
    await axios
      .get("http://127.0.0.1:8000/api/video/delete/" + id)
      .then(({ data }) => {
        fetchVideos();
        console.log(data.message);
      })
      .catch(({ response: { data } }) => {
        console.log(data.message);
      });
  };
  const ApproveVideo = async (id) => {
    await axios
      .get("http://127.0.0.1:8000/api/video/approve/" + id)
      .then(({ data }) => {
        fetchVideos();
        console.log(data.message);
      })
      .catch(({ response: { data } }) => {
        console.log(data.message);
      });
  };
  return (
    <>
      <SmallHead>Video Approval</SmallHead>
      <div class="card-body px-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0">
            <thead>
              <tr>
                <th class="">video</th>

                <th class="">image</th>
                <th class="">title</th>
                <th class="">description</th>
                <th class="">categories</th>
                <th class="">playlist</th>

                <th class=""></th>
                <th class=""></th>
              </tr>
            </thead>
            <tbody>
              {videos.map((video) => (
                <tr>
                  <td>
                    <video
                      class="avatar c me-3 border-radius-lg"
                      preload="none"
                      controls
                      playsinline
                      webkit-playsinline
                    >
                      <source
                        src={`http://127.0.0.1:8000/storage/video/video/${video.video}`}
                        type="video/mp4"
                      />
                    </video>
                  </td>
                  <td>
                    <div>
                      <img
                        src={`http://127.0.0.1:8000/storage/video/image/${video.image}`}
                        class="avatar avatar-sm me-3 border-radius-lg"
                        alt="user1"
                      />
                    </div>{" "}
                  </td>

                  <td class="align-middle text-center ">
                    <p class="">{video.title}</p>
                  </td>
                  <td class="align-middle text-center ">
                    <p class="text-xs font-weight-bold mb-0">
                      {video.description}
                    </p>
                  </td>
                  <td class="align-middle text-center ">
                    {video.categories.map((category) => (
                      <ul>
                        <li>
                        <div class="text-xs font-weight-bold mb-0">{category.name}</div>

                        </li>
                      </ul>
                    ))}
                  </td>
                  <td class="align-middle text-center ">
                    <p class="text-xs font-weight-bold mb-0">{video.PlaylistName}</p>
                  </td>

                  <td class="align-middle">
                    <button
                      class="badge badge-sm bg-gradient-success"
                      onClick={() => deleteVideo(video.id)}
                    >
                      {" "}
                      Delete
                    </button>
                  </td>
                  <td class="align-middle">
                    <button
                      class="badge badge-sm bg-gradient-success"
                      onClick={() => ApproveVideo(video.id)}
                    >
                      {" "}
                      Approve
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default VideoApproval;
