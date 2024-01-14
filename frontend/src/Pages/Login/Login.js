import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AuthUser from "../../AuthUser";

const Login = () => {
  const navigate = useNavigate();

  const { http, setToken, user } = AuthUser();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitForm = () => {
    http.post("/login", { email: email, password: password }).then((res) => {
      setToken(res.data.user, res.data.access_token);
      // console.log(user.is_admin )
      // if (user.is_admin == 0) {
        navigate("/home");
      // } else {
      //   navigate("/admin");
      // }
    });
  };
  // useEffect(() => {
  //   console.log(user.is_admin )
  // }, );

  return (
    <section class="login-main-wrapper">
      <div class="container-fluid pl-0 pr-0">
        <div class="row no-gutters">
          <div class="col-md-12 p-5 full-height">
            <div class="login-main-left">
              <div class="text-center mb-5 login-main-left-header pt-4">
                <h1>LOG-IN</h1>

                <h6 class="mt-3 mb-3">Welcome to Vidoe</h6>
              </div>

              <div class="form-group">
                <label>Email</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter mobile number"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div class="form-group">
                <label>Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div class="mt-4">
                <div class="row">
                  <div class="col-12">
                    <button
                      type="submit"
                      onClick={submitForm}
                      class="btn buttonlog btn-block btn-lg"
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              </div>

              <div class="text-center mt-2">
                <p class="light-gray">
                  Don’t have an account?
                  <Link to="/register">Sign Up</Link>
                  Don’t forgot a password?
                  <Link to="/forgot">forgot</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
