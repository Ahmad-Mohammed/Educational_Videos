import "./User.css";
// import { CategoryCard } from "../../components/index";
// import { useEffect, useState } from "react";
// import axios from "axios";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const User = () => {
 
 
  return (
    <>
    <Header />

    <Outlet/>
    <Footer/>

    </>
  );
};

export default User;
