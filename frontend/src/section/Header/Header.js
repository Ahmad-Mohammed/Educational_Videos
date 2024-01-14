import "./Header.css";
import img from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import AuthUser from "../../AuthUser";
import { useEffect, useState } from "react";

const Header = () => {

  const { user,token, logout  } = AuthUser();
  const [use, setUse] = useState("");
  const [isTeacher, setIsTeacher] = useState(false);
  const [auth, setAuth] = useState(false);
  const x =  async() => {
    if (user) {
      setUse(user.name);
      setAuth(false);
    } else {
      setUse("");
      setAuth(true);

    }
  };
  const y =  async() => {
    if (user.is_teacher == 1) {
      setIsTeacher(true);
    } else {
      setIsTeacher(false);
    }
  };
  useEffect(() => {
    x();
    y();
  }, []);
 
  const logoutUser = () => {
    if(token != undefined){
        logout();
    }
}


  return (
    <div className="navbar">
      <button className="navbar-menu-btn">
        <span className="one"></span>
        <span className="two"></span>
        <span className="three"></span>
      </button>

      <Link to="/home" className="navbar-brand">
        <img src={img} alt="" />
      </Link>
    
      <nav className="navbar-actions">
        <Link to="/home" className="navbar-link">
          Home
        </Link>

        <Link to="/all-video" className="navbar-link ml-4">
          All Videos
        </Link>

        {isTeacher &&<Link class="navbar-link ml-4" to="/upload-video">
          Upload Video
        </Link>}
        {isTeacher &&<Link class="navbar-link ml-4" to="/upload-video">
          my video
        </Link>}
      </nav>

      <div className="navbar-actions">
        <form action="#" className="navbar-form">
          <input
            type="text"
            name="search"
            placeholder="I'm looking for..."
            className="navbar-form-search"
          />

          <button className="navbar-form-btn">
            <ion-icon name="search-outline"></ion-icon>
          </button>

          <button className="navbar-form-close">
            <ion-icon name="close-circle-outline"></ion-icon>
          </button>
        </form>

        <button className="navbar-search-btn">
          <ion-icon name="search-outline"></ion-icon>
        </button>

      {auth && <Link to="/login" className="navbar-signin ">
          <span>Login</span>
          <ion-icon name="log-in-outline"></ion-icon>
        </Link>}

        {auth &&<div class="nav-item dropdown no-arrow osahan-right-navbar-user ml-3">
          <a
            class="navbar-signin  nav-link  user-dropdown-link"
            href="#"
            id="usereDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span>Register</span>
            <ion-icon name="log-in-outline"></ion-icon>
          </a>
          <div
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="usereDropdown"
          >
            <Link class="dropdown-item" to="/register-teacher">
              <i class="fas fa-fw fa-user-circle"></i> &nbsp; Teacher
            </Link>
            <Link class="dropdown-item" to="/register">
              <i class="fas fa-fw fa-user-circle"></i> &nbsp; Student
            </Link>
          </div>
        </div>}
        {!auth &&<div class="nav-item dropdown no-arrow osahan-right-navbar-user">
          <a
            class="navbar-link dropdown-toggle user-dropdown-link"
            href="#"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {use}
          </a>
          <div
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="userDropdown"
          >
            {isTeacher &&<Link class="dropdown-item" to="/single-channel">
              <i class="fas fa-fw fa-user-circle"></i> &nbsp; My Channel
            </Link>
            
            }
            <div class="dropdown-divider"></div>

            <li className="dropdown-item">
              <span role="button" className="nav-link" onClick={logoutUser}>
                Logout
              </span>
            </li>
          </div>
        </div>}
        
      </div>
    </div>
  );
};

export default Header;
