import { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import AuthUser from "../../AuthUser";
// import { isEmail } from "validator";

// const required = (value) => {
//   if (!value) {
//     return (
//       <div className="invalid-feedback d-block">This field is required!</div>
//     );
//   }
// };

// const validEmail = (value) => {
//   if (!isEmail(value)) {
//     return (
//       <div className="invalid-feedback d-block">This is not a valid email.</div>
//     );
//   }
// };

// const vusername = (value) => {
//   if (value.length < 3 || value.length > 20) {
//     return (
//       <div className="invalid-feedback d-block">
//         The username must be between 3 and 20 characters.
//       </div>
//     );
//   }
// };

// const vpassword = (value) => {
//   if (value.length < 6 || value.length > 40) {
//     return (
//       <div className="invalid-feedback d-block">
//         The password must be between 6 and 40 characters.
//       </div>
//     );
//   }
// };
const Register = () => {
  // // const navigate = useNavigate();

  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // // const passwordError = async (e) => {
  // //   if (this.password.length > 0 && this.password.length < 7) {
  // //   }
  // // };
  // const REGISTER = async (e) => {
  //   e.preventDefault();
  //   const formData1 = new FormData();
  //   formData1.append("name", username);
  //   formData1.append("email", email);
  //   formData1.append("password", password);
  //   // console.log(password.length);
  //   await axios
  //     .post("http://127.0.0.1:8000/api/auth/register", formData1)
  //     .then(({ data }) => {
  //       console.log(data.password.length);
  //       // navigate("/");
  //     })
  //     .catch(({ response }) => {
  //       // eslint-disable-next-line eqeqeq
  //       if (response.status == 422) {
  //         console.log(response.data.errors);
  //       } else {
  //         console.log(response.data.message);
  //       }
  //     });
  // };
  const navigate = useNavigate();
  const { http, setToken } = AuthUser();
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const changeHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("image", image);
    formData.append("email", email);
    formData.append("password", password);
       http
      .post("/register" , formData)
      .then((res) => {
        navigate("/login");
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
    <section class="login-main-wrapper">
      <div class="container-fluid pl-0 pr-0">
        <div class="row no-gutters">
          <div class="col-md-12 p-5  full-height">
            <div class="login-main-left">
              <div class="text-center mb-5 login-main-left-header pt-4">
                <h1>REGISTER</h1>

                <h6 class="mt-3 mb-3">Welcome to Vidoe</h6>
              </div>
              <form onSubmit={submitForm}>
                <div class="form-group">
                  <label>User Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter mobile number"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    // validations={[required, vusername]}
                  />
                </div>
                <div class="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Password"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    // validations={[required, validEmail]}
                  />
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Promocode"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    // validations={[required, vpassword]}
                  />
                </div>
                <div class="form-group">
                    <label>Your Image</label>
                    <input
                      type="file"
                      class="form-control"
                      placeholder="Promocode"
                      onChange={changeHandler}
                    />
                  </div>
                {/* <div onError={passwordError} class="text-danger">
                  the email is not valid...
                </div> */}
                <div class="mt-4">
                  <button type="submit" class="btn buttonlog btn-block btn-lg">
                    Sign Up
                  </button>
                </div>
              </form>
              <div class="text-center mt-5">
                <p class="light-gray">
                  Already have an Account? <Link to="/login">Sign In</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
