import axios from "axios";
import SmallHead from "../SmallHead/SmallHead";
import "./CategoryUpload.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CategoryUpload = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const changeHandler1 = (e) => {
    setImage(e.target.files[0]);
  };
  
  const createCategory = async (e) => {
    e.preventDefault();
    const formData1 = new FormData();
    formData1.append("name", name);
    formData1.append("image", image);

    await axios
      .post("http://127.0.0.1:8000/api/create/category", formData1)
      .then(({ data }) => {
        console.log(data);
        navigate("/admin/categories");
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
  return (
    <>
    <SmallHead>
    Category Upload
    </SmallHead>
    <div class="login-main-wrapper">
        <div class="container-fluid pl-0 pr-0">
          <div class="row no-gutters">
            <div class="col-md-12 p-5  full-height">
              <div class="login-main-left">
                <div class="text-center mb-5 login-main-left-header pt-2">
                  <h1>Upload Video</h1>

                  <h6 class="mt-3 mb-3">Welcome to Vidoe</h6>
                </div>
                <form onSubmit={createCategory}>
                  <div class="form-group">
                    <label>Title</label>
                    <br/>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter mobile number"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div class="form-group">
                    <label>description</label>
                    <input
                      type="file"
                      class="form-control"
                      onChange={changeHandler1}

                    />
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
    {/* <div class="login-main-wrapper">
        <div class="container-fluid pl-0 pr-0">
          <div class="row no-gutters">
            <div class="col-md-12 p-5  full-height">
              <div class="login-main-left">
              <div class="text-center mb-5 login-main-left-header pt-2">
                  <h1>Upload Video</h1>

                  <h6 class="mt-3 mb-3">Welcome to Vidoe</h6>
                </div>
                  <form >
                  <div class="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter mobile number"
                      // value={title}
                      // onChange={(e) => {
                      //   setTitle(e.target.value);
                      // }}
                    />
                  </div>
                  <div class="form-group">
                    <label>description</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter mobile number"
                      // value={description}
                      // onChange={(e) => {
                      //   setDescription(e.target.value);
                      // }}
                    />
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
            </div> */}
            
    
    </>
    
  );
};

export default CategoryUpload;
