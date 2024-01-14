import "./UploadVideo.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Checkbox } from "../../components";
import AuthUser from "../../AuthUser";

const UploadVideo = () => {
  const navigate = useNavigate();
  const { user } = AuthUser();


  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [channel, setChannel] = useState("");
  const [playlists, setPlaylists] = useState([]);
  const [isCheck, setIsCheck] = useState([false]);
  const [categoryId, setCategoryId] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [categories, setCategories] = useState([]);


  const changeHandler1 = (e) => {
    setImage(e.target.files[0]);
  };
  const changeHandler2 = (e) => {
    setVideo(e.target.files[0]);
  };
  const handleChange = (e) => {
    if (e.target.checked !== true) {
      setIsCheck(false);
      categoryId.forEach((element) => {
        setCategoryId(
          categoryId.filter(function (cate) {
            return cate !== e.target.value;
          })
        );
      });
    } else {
      setCategoryId((current) => [...current, e.target.value]);
      setIsCheck(true);
      setChannel(user.channel);

      
    }
    console.log("Checkbox: ", e.target.value, e.target.checked);

  };


  const createVideo = async (e) => {
    e.preventDefault();
    const formData1 = new FormData();
    formData1.append("title", title);
    formData1.append("description", description);
    formData1.append("image", image);
    formData1.append("video", video);
    formData1.append("playlist_id", playlist);
    formData1.append("channel_id", channel);
 

    categoryId.forEach((item) => {
      formData1.append("categoryId[]", item);
    });
    await axios
      .post("http://127.0.0.1:8000/api/videos", formData1)
      .then(({ data }) => {
        console.log(data);
        navigate("/home");
      })
      .catch(({ response }) => {
        // eslint-disable-next-line eqeqeq
        if (response.status == 422) {
          console.log(response.data.errors);
        } else {
          console.log(response.data.message);
        }
      });
  };

  useEffect(() => {
    fetchCategories();
    // console.log(user);

    fetchPlaylist();
  }, []);

  const fetchCategories = async () => {
    await axios.get("http://127.0.0.1:8000/api/categories").then(({ data }) => {
      setCategories(data.data);
    });
  };
  const fetchPlaylist = async () => {
    await axios.get("http://127.0.0.1:8000/api/playlists/"+user.channel).then(({ data }) => {
      setPlaylists(data.data);
      // console.log(data.data);
    });
  };
  return (
    <>
      <div class="login-main-wrapper">
        <div class="container-fluid pl-0 pr-0">
          <div class="row no-gutters">
            <div class="col-md-12 p-5  full-height">
              <div class="login-main-left">
                <div class="text-center mb-5 login-main-left-header pt-2">
                  <h1>Upload Video</h1>

                  <h6 class="mt-3 mb-3">Welcome to Vidoe</h6>
                </div>
                <form onSubmit={createVideo}>
                  <div class="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter mobile number"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </div>
            
                  <div class="form-group">
                    <label>description</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter mobile number"
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    />
                  </div>
                  <div class="form-group">
                    <label>image</label>
                    <input
                      type="file"
                      class="form-control"
                      placeholder="Password"
                      onChange={changeHandler1}
                    />
                  </div>

                  <div class="form-group">
                    <label>video</label>
                    <input
                      type="file"
                      class="form-control"
                      placeholder="Promocode"
                      onChange={changeHandler2}
                    />
                  </div>
                  <div class="form-group">
                    <label>Playlist</label>
                    <select
                      class="form-control"
                      onChange={(e) => {
                        setPlaylist(e.target.value);
                      }}
                    >
                      {playlists.map((playlist) => (
                        <option value={playlist.id}>{playlist.title}</option>
                      ))}
                    </select>
                  </div>

                  <lable>Category ( you can select upto 4 categories )</lable>

                  <div class="row category-checkbox a">
                    {categories.map((cate) => (
                      <div class="custom-control custom-checkbox  s ">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id={cate.id}
                          value={cate.id}
                          checked={isCheck[cate.id]}
                          onChange={handleChange}
                        />
                        <label class="custom-control-label" for={cate.id}>
                          {cate.name}
                        </label>
                      </div>
                    ))}
                  </div>

                  <div class="mt-4">
                    <button
                      type="submit"
                      class="btn buttonlog btn-block btn-lg"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="login-main-wrapper"></div>
    </>
  );
};

export default UploadVideo;
