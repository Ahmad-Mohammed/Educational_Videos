import "./TeacherCard.css";
import img2 from "../../assets/images/action.jpg";
import { Link } from "react-router-dom";

const TeacherCard = (props) => {
  // console.log(props.teacher);
  return (
    <Link to={`/single-channel/${props.teacher.name}`}>
      <div class="category-card">
        <img
          src={`http://127.0.0.1:8000/storage/teacher/teacher_image/${props.teacher.teacher_image}`}
          alt=""
          class="card-img"
        />
      </div>
      <div class="x">
        <div class="name">{props.teacher.name}</div>
      </div>
    </Link>
  );
  
};

export default TeacherCard;
