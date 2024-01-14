import { useEffect, useState } from "react";
import { TeacherCard } from "../../components";
import "./TeacherList.css";
import axios from "axios";

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    await axios.get("http://127.0.0.1:8000/api/teachers").then(({ data }) => {
      setTeachers(data.data);
      // console.log(data.data);
    });
  };
  return (
    <section class="category" id="category">
      <h2 class="section-heading">Teachers</h2>

      <div class="category-grid">
        {teachers.map((teacher) => (
          <TeacherCard teacher={teacher} />
        ))}
      </div>
    </section>
  );
};

export default TeacherList;
