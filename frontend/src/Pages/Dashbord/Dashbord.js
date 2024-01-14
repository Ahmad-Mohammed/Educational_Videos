import axios from "axios";
import { VideoCard } from "../../components";
import "./Dashbord.css";
import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Head, Nav, SmallHead, Table } from "../../section";

const Dashbord = () => {
  return (
    <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
      <div class="container-fluid px-2 px-md-4">
        <Head />
        <Nav />
      </div>
      <div class="container-fluid py-4">
        <div class="row">
          <div class="col-12">
            <div class="card my-4">
              <Outlet/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashbord;
