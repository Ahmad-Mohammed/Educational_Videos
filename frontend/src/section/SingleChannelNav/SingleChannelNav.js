import { useContext } from "react";
import { TeacherContext } from "../../Pages/SingleChannel/SingleChannel";
import "./SingleChannelNav.css";
import { NavLink } from "react-router-dom";

const SingleChannelNav = (props) => {
  const { teacher } = useContext(TeacherContext);

  return (
    <div class="single-channel-nav box ">
      <nav class="navbar navbar-expand-lg ">
        <div class="channel-brand">{teacher.name}</div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <NavLink class="nav-link" to="videos">
                Videos <span class="sr-only"></span>
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="playlist">
                Playlist
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="about">
                About
              </NavLink>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
         
            <div class="float-right">
              <button class="btn button" type="button">
                Subscribe <strong>1.4M</strong>
              </button>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default SingleChannelNav;
