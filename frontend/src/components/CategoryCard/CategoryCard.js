import "./CategoryCard.css";
import img2 from "../../assets/images/action.jpg";
import { Link } from "react-router-dom";

const CategoryCard = (props) => {
  // console.log(props.category);
  return (
    <Link to={`/all-video/${props.category.name}`}>
      <div class="category-card">
        <img
          src={`http://127.0.0.1:8000/storage/teacher/teacher_image/${props.category.image}`}
          alt=""
          class="card-img"
        />
        <div class="name">{props.category.name}</div>

        <div class="total">{props.category.count}</div>
      </div>
    </Link>
  );
};

export default CategoryCard;
