import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";
import AuthUser from "../../AuthUser";

const Nav = () => {
  const navigate = useNavigate();

  const { user, token, logout } = AuthUser();

  const logoutUser = () => {
    if (token !== undefined) {
      logout();
      navigate("/home");

    }
  };
  return (
    <div class="card card-body mx-3 mx-md-4 mt-n6">
      <div class="row gx-4 mb-2">
        <div class="col-auto">
          <div class="avatar avatar-xl position-relative">
            {/* <img
              src="assets/img/bruce-mars.jpg"
              alt="profile_image"
              class="w-100 border-radius-lg shadow-sm"
            /> */}
             <img
                class="img-fluid"
                // src={`http://127.0.0.1:8000/storage/video/image/${props.video.image}`}
                
                alt=""
              />
          </div>
        </div>
        <div class="col-auto my-auto">
          <div class="h-100">
            <h5 class="mb-1">Richard Davis</h5>
            <span role="button" className="nav-link" onClick={logoutUser}>
              Logout
            </span>{" "}
          </div>
        </div>
        <div class="col-lg-8 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3 ">
          <div class="nav-wrapper position-relative end-0 ">
            <ul class="nav nav-pills nav-fill p-1 " role="tablist">
              <li class="nav-item ">
                <Link class=" mb-0 px-0 py-1 active " to="/admin">
                  <span class="ms-1">Home</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class=" mb-0 px-0 py-1 active " to="/admin/channels">
                  <span class="ms-1">Channels Table</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class=" mb-0 px-0 py-1 active " to="/admin/videos">
                  <span class="ms-1">Videos Table</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class=" mb-0 px-0 py-1 active " to="/admin/categories">
                  <span class="ms-1">Categories Table</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class=" mb-0 px-0 py-1 active "
                  to="/admin/category/upload"
                >
                  <span class="ms-1">Categories Upload</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class=" mb-0 px-0 py-1 active "
                  to="/admin/video/approval"
                >
                  <span class="ms-1">Video Approval</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class=" mb-0 px-0 py-1 active "
                  to="/admin/channel/approval"
                >
                  <span class="ms-1">Channel Approval</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
