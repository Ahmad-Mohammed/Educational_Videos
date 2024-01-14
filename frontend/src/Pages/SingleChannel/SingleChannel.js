import "./SingleChannel.css";
import { SingleChannelImage, SingleChannelNav } from "../../section/index";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  useParams,
} from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const TeacherContext = createContext();

const SingleChannel = () => {
  const { name } = useParams();
  const [teacher, setTeacher] = useState("");

  useEffect(() => {
    fetchTeacher();
  }, []);

  const fetchTeacher = async () => {
    await axios
      .get("http://127.0.0.1:8000/api/teacher/" + name)
      .then(({ data }) => {
        setTeacher(data.data);
        // console.log(data);
        // console.log(data.data);
      });
  };

  return (
    <>
      <TeacherContext.Provider value={{ teacher }}>
        <SingleChannelImage />
        <SingleChannelNav />
              <Outlet />

      </TeacherContext.Provider>

    </>
  );
};

export default SingleChannel;
