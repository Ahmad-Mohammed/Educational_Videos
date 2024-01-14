import "./App.css";
import { Container } from "./components/index";
import {
  SingleChannelVideos,
  SingleChannelPlaylist,
  SingleChannelAbout,
  User,
  Table,
  CategoryTable,
  CategoryUpload,
  VideoApproval,
  ChannelApproval,
  CategoryUpdate,
  VideoTable,
} from "./section/index";
import {
  Home,
  Login,
  Register,
  VideoPage,
  SingleChannel,
  Forgot,
  AllVideo,
  RegisterTeacher,
  UploadVideo,
  Done,
  Dashbord,
  AllVideoCategory,
  AllVideoPlaylist,
} from "./Pages/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthUser from "./AuthUser";

const App = () => {
  const { getToken, user } = AuthUser();
  if (getToken()) {
    if (user.is_admin === 1) {
      return (
        <Router>
          <Container>
            <Routes>
              <Route path="/admin" element={<Dashbord />}>
                <Route path="channels" element={<Table />} />
                <Route path="categories" element={<CategoryTable />} />
                <Route path="videos" element={<VideoTable />} />

                <Route path="category/upload" element={<CategoryUpload />} />
                <Route
                  path="category/update/:title"
                  element={<CategoryUpdate />}
                />
                <Route path="video/approval" element={<VideoApproval />} />
                <Route path="channel/approval" element={<ChannelApproval />} />
              </Route>
            </Routes>
          </Container>
        </Router>
      );
    }
    if (user.is_teacher === 1) {
      return (
        <Router>
          <Container>
            <Routes>
              <Route path="/" element={<User />}>
                <Route path="/home" element={<Home />} />
                <Route path="/video-page/:id" element={<VideoPage />} />
                <Route path="/all-video/:name" element={<AllVideoCategory />} />
                <Route
                  path="/all-video/:title"
                  element={<AllVideoPlaylist />}
                />
                <Route path="/all-video" element={<AllVideo />} />
                {/* <Route path="/register-teacher" element={<RegisterTeacher />} /> */}
                {/* <Route path="/done" element={<Done />} /> */}
                {/* <Route path="/login" element={<Login />} /> */}
                {/* <Route path="/forgot" element={<Forgot />} /> */}
                <Route path="/single-channel/:name" element={<SingleChannel />}>
                  <Route path="videos" element={<SingleChannelVideos />} />
                  <Route path="playlist" element={<SingleChannelPlaylist />} />
                  <Route path="about" element={<SingleChannelAbout />} />
                </Route>
                <Route path="/upload-video" element={<UploadVideo />} />
              </Route>
            </Routes>
          </Container>
        </Router>
      );
    }
    return (
      <Router>
        <Container>
          <Routes>
            <Route path="/" element={<User />}>
              <Route path="/home" element={<Home />} />
              <Route path="/video-page/:id" element={<VideoPage />} />
              <Route path="/all-video/:name" element={<AllVideoCategory />} />
              <Route path="/all-video/:title" element={<AllVideoPlaylist />} />
              <Route path="/all-video" element={<AllVideo />} />
              <Route path="/register-teacher" element={<RegisterTeacher />} />

              <Route path="/single-channel/:name" element={<SingleChannel />}>
                <Route path="videos" element={<SingleChannelVideos />} />
                <Route path="playlist" element={<SingleChannelPlaylist />} />
                <Route path="about" element={<SingleChannelAbout />} />
              </Route>
            </Route>
          </Routes>
        </Container>
      </Router>
    );
  }
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<User />}>
            <Route path="/home" element={<Home />} />
            <Route path="/video-page/:id" element={<VideoPage />} />
            <Route path="/all-video/:name" element={<AllVideoCategory />} />
            <Route path="/all-video/:title" element={<AllVideoPlaylist />} />
            <Route path="/all-video" element={<AllVideo />} />
            <Route path="/register" element={<Register />} />
            <Route path="/register-teacher" element={<RegisterTeacher />} />
            <Route path="/done" element={<Done />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot" element={<Forgot />} />

            <Route path="/single-channel/:name" element={<SingleChannel />}>
              <Route path="videos" element={<SingleChannelVideos />} />
              <Route path="playlist" element={<SingleChannelPlaylist />} />
              <Route path="about" element={<SingleChannelAbout />} />
            </Route>
          </Route>
        </Routes>
      </Container>
    </Router>
  );

  // return (
  //   <Router>
  //     <Container>
  //       <Routes>
  //       {/* <AuthUser></AuthUser> */}
  //         <Route path="/" element={<User />}>
  //           <Route path="/home" element={<Home />} />
  //           <Route path="/video-page/:id" element={<VideoPage />} />
  //           <Route path="/all-video/:name" element={<AllVideoCategory />} />
  //           <Route path="/all-video/:title" element={<AllVideoPlaylist />} />
  //           <Route path="/all-video" element={<AllVideo />}/>
  //           <Route path="/register" element={<Register />} />
  //           <Route path="/register-teacher" element={<RegisterTeacher />} />
  //           <Route path="/done" element={<Done />} />
  //           <Route path="/login" element={<Login />} />
  //           <Route path="/forgot" element={<Forgot />} />

  //           <Route path="/single-channel/:name" element={<SingleChannel />}>
  //             <Route path="videos" element={<SingleChannelVideos />} />
  //             <Route path="playlist" element={<SingleChannelPlaylist />} />
  //             <Route path="about" element={<SingleChannelAbout />} />
  //           </Route>

  //           <Route path="/upload-video" element={<UploadVideo />} />
  //         </Route>
  //         <Route path="/admin" element={<Dashbord />}>
  //           <Route path="channels" element={<Table />} />
  //           <Route path="categories" element={<CategoryTable />} />
  //           <Route path="category/upload" element={<CategoryUpload />} />
  //           <Route path="category/update/:title" element={<CategoryUpdate />} />
  //           <Route path="video/approval" element={<VideoApproval />} />
  //           <Route path="channel/approval" element={<ChannelApproval />} />
  //         </Route>
  //       </Routes>
  //     </Container>
  //   </Router>
  // );
};

export default App;
