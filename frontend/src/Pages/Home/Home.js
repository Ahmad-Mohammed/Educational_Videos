import "./Home.css";
import {
  Welcome,
  VideoList,
  CategoryList,
  TeacherList,
} from "../../section/index";

const Home = () => {

  return (
    <>
      <Welcome />
      <VideoList />
      <CategoryList />
      <TeacherList />
    </>
  );
};

export default Home;
