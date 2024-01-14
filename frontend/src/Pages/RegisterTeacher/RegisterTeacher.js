import { useEffect, useState } from "react";
import "./RegisterTeacher.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterTeacher = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [teacherImage, setTeacherImage] = useState("");
  const [channelImage, setChannelImage] = useState("");
  const [cv, setCV] = useState("");
  const [about, setAbout] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [competence, setCompetence] = useState("");
  const [gender, setGender] = useState("");
  const [perthday, setPerthday] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isCheck, setIsCheck] = useState([false]);

  const changeHandler1 = (e) => {
    setCV(e.target.files[0]);
  };
  const changeHandler2 = (e) => {
    setTeacherImage(e.target.files[0]);
  };
  const changeHandler3 = (e) => {
    setChannelImage(e.target.files[0]);
  };

  const createChannel = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("teacher_image", teacherImage);
    formData.append("channel_image", channelImage);
    formData.append("cv", cv);
    formData.append("age", age);
    formData.append("phone", phone);
    formData.append("about", about);
    formData.append("address", address);
    formData.append("competence", competence);
    formData.append("gender", gender);
    formData.append("perthday", perthday);
    formData.append("email", email);
    formData.append("password", password);

    // console.log(gender)
    await axios
      .post("http://127.0.0.1:8000/api/channels", formData)
      .then(({ data }) => {
        console.log(data);
        navigate("/done");
      })
      .catch(({ response }) => {
        if (response.status === 422) {
          console.log(response.data.errors);
        } else {
          console.log(response.data.message);
        }
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
                  <h1>REGISTER</h1>

                  <h6 class="mt-3 mb-3">Welcome to Vidoe</h6>
                </div>
                <form onSubmit={createChannel}>
                  <div class="form-group">
                    <label>Your Name</label>
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
                    <label>email</label>
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
                    <label>password</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Enter mobile number"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div class="form-group">
                    <label>description</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter mobile number"
                      value={about}
                      onChange={(e) => {
                        setAbout(e.target.value);
                      }}
                    />
                  </div>
                  <div class="form-group">
                    <label>Age</label>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Enter mobile number"
                      value={age}
                      onChange={(e) => {
                        setAge(e.target.value);
                      }}
                    />
                  </div>
                  <div class="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Promocode"
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    />
                  </div>
                  <div class="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      class="form-control"
                      placeholder="Promocode"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </div>
                  <div class="form-group">
                    <label>Competence</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Promocode"
                      value={competence}
                      onChange={(e) => {
                        setCompetence(e.target.value);
                      }}
                    />
                  </div>
                  <div class="form-group">
                    <label>perthday</label>
                    <input
                      type="date"
                      class="form-control"
                      placeholder="Promocode"
                      value={perthday}
                      onChange={(e) => {
                        setPerthday(e.target.value);
                      }}
                    />
                  </div>
                  <div class="form-group">
                    <label>Gender</label>
                    <select
                      class="form-control"
                      onChange={(e) => {
                        setGender(e.target.value);
                        console.log(e.target.value)
                      }}
                    >
                      <option value="0">male</option>
                      <option value="1">female</option>
                    </select>
                  </div>
                 
                  <div class="form-group">
                    <label>Your CV</label>
                    <input
                      type="file"
                      class="form-control"
                      placeholder="Promocode"
                      onChange={changeHandler1}
                    />
                  </div>
                  <div class="form-group">
                    <label>Your Image</label>
                    <input
                      type="file"
                      class="form-control"
                      placeholder="Promocode"
                      onChange={changeHandler2}
                    />
                  </div>
                  <div class="form-group">
                    <label>Your Channel Image</label>
                    <input
                      type="file"
                      class="form-control"
                      placeholder="Promocode"
                      onChange={changeHandler3}
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
                <div class="text-center mt-5">
                  <p class="light-gray">
                    Already have an Account? <Link to="/login">Sign In</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="login-main-wrapper"></div>
    </>
  );
};

export default RegisterTeacher;
