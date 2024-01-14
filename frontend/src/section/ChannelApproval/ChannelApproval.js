import { useEffect, useState } from "react";
import SmallHead from "../SmallHead/SmallHead";
import "./ChannelApproval.css";
import axios from "axios";
import { Link } from "react-router-dom";

const ChannelApproval = () => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    fetchChannels();
  }, []);

  const fetchChannels = async () => {
    await axios
      .get("http://127.0.0.1:8000/api/channels/unappeoved")
      .then(({ data }) => {
        setChannels(data.data);
        // console.log(data);
        // console.log(data.data);
      });
  };
  const deleteChannel = async (id) => {
    await axios
      .get("http://127.0.0.1:8000/api/delete/teacher/" + id)
      .then(({ data }) => {
        fetchChannels();
        console.log(data.message);
      })
      .catch(({ response: { data } }) => {
        console.log(data.message);
      });
  };
  const ApproveChannel = async (id) => {
    await axios
      .get("http://127.0.0.1:8000/api/approve/teacher/" + id)
      .then(({ data }) => {
        fetchChannels();
        console.log(data.message);
      })
      .catch(({ response: { data } }) => {
        console.log(data.message);
      });
  };
  const downlodeCV = async (file) => {
    console.log(file);

    await axios
      .get("http://127.0.0.1:8000/api/download/cv/"+ file )
      .then(({ data }) => {
        // fetchChannels();
        console.log(data.message);
      })
      .catch(({ response: { data } }) => {
        console.log(data.message);
      });
  };
  return (
    <>
      <SmallHead>Channel Approval</SmallHead>
      <div class="card-body px-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0">
            <thead>
              <tr>
                <th class="">teacher_image</th>
                {/* <th class="">channel_image</th> */}
                <th class="">name</th>

                <th class="">about</th>
                <th class="">age</th>
                <th class="">phone</th>
                <th class="">address</th>
                <th class="">competence</th>
                <th class="">gender</th>
                <th class="">cv</th>
                <th class="">perthday</th>
                <th class=""></th>
                <th class=""></th>
                <th class=""></th>
              </tr>
            </thead>
            <tbody>
              {channels.map((channel) => (
                <tr>
                  <td>
                    <div>
                      <img
                        src={`http://127.0.0.1:8000/storage/teacher/teacher_image/${channel.teacher_image}`}
                        class="avatar avatar-sm me-3 border-radius-lg"
                        alt="user1"
                      />
                    </div>{" "}
                  </td>
                  {/* <td>
                    <div>
                      <img
                        src={`http://127.0.0.1:8000/storage/teacher/channel_image/${channel.channel_image}`}
                        class="avatar avatar-sm me-3 border-radius-lg"
                        alt="user1"
                      />
                    </div>{" "}
                  </td> */}
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">{channel.name}</h6>
                      </div>
                    </div>
                  </td>

                  <td class="align-middle text-center ">
                    <p class="text-xs font-weight-bold mb-0">{channel.about}</p>
                  </td>

                  <td class="align-middle text-center ">
                    <p class="text-xs font-weight-bold mb-0">{channel.age}</p>
                  </td>
                  <td class="align-middle text-center ">
                    <p class="text-xs font-weight-bold mb-0">{channel.phone}</p>
                  </td>
                  <td class="align-middle text-center ">
                    <p class="text-xs font-weight-bold mb-0">
                      {channel.address}
                    </p>
                  </td>
                  <td class="align-middle text-center ">
                    <p class="text-xs font-weight-bold mb-0">
                      {channel.competence}
                    </p>
                  </td>
                  <td class="align-middle text-center ">
                    <p class="text-xs font-weight-bold mb-0">
                      {channel.gender}
                    </p>
                  </td>
                  <td class="">
                    <Link
                      target="_blank"
                      to={`http://127.0.0.1:8000/storage/teacher/cv/${channel.cv}`}
                    >
                       <img
                      class="avatar avatar-sm me-3 border-radius-lg"
                      src={`http://127.0.0.1:8000/storage/teacher/cv/cv.png`}
                    />{" "}
                    
                    </Link>
                    <button
                      class="badge badge-sm bg-gradient-success mt-3 mb-1 mr-3"
                      onClick={() => downlodeCV(channel.cv)}
                    >
                      {" "}
                      downlode cv
                    </button>
                  </td>
                  <td class="align-middle text-center ">
                    <p class="text-xs font-weight-bold mb-0">
                      {channel.perthday}
                    </p>
                  </td>

              
                  <td class="align-middle">
                    <button
                      class="badge badge-sm bg-gradient-success"
                      onClick={() => deleteChannel(channel.id)}
                    >
                      {" "}
                      Delete
                    </button>
                  </td>
                  <td class="align-middle">
                    <button
                      class="badge badge-sm bg-gradient-success"
                      onClick={() => ApproveChannel(channel.id)}
                    >
                      {" "}
                      Approve
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ChannelApproval;
