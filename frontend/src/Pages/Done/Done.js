import { Link } from "react-router-dom";
import "./Done.css";

const Done = () => {
  return (
    <div class="login-main-wrapper">
    <div class="container-fluid pl-0 pr-0">
      <div class="row no-gutters">
        <div class="col-md-12 p-5  full-height">
          <div class="login-main-left">
            <div class="text-center mb-5 login-main-left-header pt-2">
              <h3 className="mt-5 mb-3">Welcome again<br/>
              you are registered in this wibsite<br/>
              waiting from the Admin</h3>
            </div>
         
            <div class="text-center mt-5">
              <h6 class="light-gray">
                if you Want to go : <Link to="/" className="navbar-link">Home</Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Done;
