import { useEffect, useState } from "react";
import SmallHead from "../SmallHead/SmallHead";
import "./Table.css";
import axios from "axios";

const Table = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    await axios.get("http://127.0.0.1:8000/api/teachers").then(({ data }) => {
      setTeachers(data.data);
      // console.log(data);
      console.log(data.data);
    });
  };
  const deleteTeacher = async (id) => {
    await axios
      .get("http://127.0.0.1:8000/api/delete/teacher/" + id)
      .then(({ data }) => {
        fetchTeachers();
        console.log(data.message);
      })
      .catch(({ response: { data } }) => {
        console.log(data.message);
      });
  };
  return (
    <>
      <SmallHead>Channel Table</SmallHead>
      <div class="card-body px-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0">
            <thead>
              <tr>
              <th class="">teacher_image</th>

                <th class="">name</th>
                
                {/* <th class="">about</th> */}
                <th class="">age</th>
                <th class="">phone</th>
                <th class="">address</th>
                <th class="">competence</th>
                <th class="">gender</th>
                <th class="">perthday</th>
                <th class="">cv</th>
                <th class=""></th>
              </tr>
            </thead>
            <tbody>
            {teachers.map((teacher) => (
                <tr>
                   <td >
                  <div>
                    <img
                      src={`http://127.0.0.1:8000/storage/teacher/teacher_image/${teacher.teacher_image}`}
                      class="avatar avatar-sm me-3 border-radius-lg"
                      alt="user1"
                    />
                  </div>
                </td>
                <td>
                  <div class="d-flex px-2 py-1">
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-0 text-sm">{teacher.name}</h6>
                    </div>
                  </div>
                </td>
              
                
                <td class="align-middle text-center">
                  <span class="">
                  {teacher.age}
                  </span>
                </td>
                <td class="align-middle text-center">
                  <span class="">
                  {teacher.phone}
                  </span>
                </td>
                <td class="align-middle text-center">
                  {teacher.address}
                </td>
                <td class="align-middle text-center">
                  <span class="">
                  {teacher.competence}
                  </span>
                </td>
                <td class="align-middle text-center">
                  <span class="">
                  {teacher.gender}
                  </span>
                </td>
                <td class="align-middle text-center">
                  <span class="">
                  {teacher.perthday}
                  </span>
                </td>
                <td class="">
                  <span class="">
                  {teacher.cv}
                  </span>
                </td>
                
               
                <td class="align-middle">
                    <button
                      class="badge badge-sm bg-gradient-success"
                      onClick={() => deleteTeacher(teacher.id)}
                    >
                      {" "}
                      Delete
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

export default Table;
