import "./CtegoryRow.css";
import img2 from "../../assets/images/action.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const CtegoryRow = (props) => {
  const navigate = useNavigate();

 
  const deleteCategory = async (id) => {
    await axios.get('http://127.0.0.1:8000/api/delete/category/' + id)
        .then(({ data }) => {
          // navigate("/admin");
          // navigate("/admin/categories");
            console.log(data.message)
        }).catch(({ response: { data } }) => {
            console.log(data.message)
        })
}
  return (
    <tr>
      <td>
        <div class=" b">
          <div class="d-flex flex-column justify-content-center">
            <h1 class="mb-0 text-sm">{props.category.name}</h1>
          </div>
        </div>
      </td>
      <td>
        <img
          src={`http://127.0.0.1:8000/storage/category/image/${props.category.image}`}
          class="avatar avatar-sm me-3 border-radius-lg"
          alt="user1"
        />
      </td>

      <td class="align-middle">
        
        <button class="badge badge-sm bg-gradient-success" onClick={() => deleteCategory(props.category.id)}>  Delete</button>

      </td>
    </tr>
  );
};

export default CtegoryRow;
