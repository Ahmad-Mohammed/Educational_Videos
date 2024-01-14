import { useEffect, useState } from "react";
import SmallHead from "../SmallHead/SmallHead";
import "./CategoryTable.css";
import axios from "axios";
import { CtegoryRow } from "../../components";
import { Link } from "react-router-dom";

const CategoryTable = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    await axios.get("http://127.0.0.1:8000/api/categories").then(({ data }) => {
      setCategories(data.data);
      // console.log(data);
      console.log(data.data);
    });
  };
  const deleteCategory = async (name) => {
    await axios
      .get("http://127.0.0.1:8000/api/delete/category/" + name)
      .then(({ data }) => {
        fetchCategories();
        console.log(data.message);
      })
      .catch(({ response: { data } }) => {
        console.log(data.message);
      });
  };
  return (
    <>
      <SmallHead>Categories Table</SmallHead>
      <div class="card-body px-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0">
            <thead>
              <tr>
                <th class="">Name</th>
                <th class="">Image</th>
                <th class=""></th>
                <th class=""></th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr>
                  <td>
                    <div class=" b">
                      <div class="d-flex flex-column justify-content-center">
                        <h1 class="mb-0 text-sm">{category.name}</h1>
                      </div>
                    </div>
                  </td>
                  <td>
                    <img
                      src={`http://127.0.0.1:8000/storage/category/image/${category.image}`}
                      class="avatar avatar-sm me-3 border-radius-lg"
                      alt="user1"
                    />
                  </td>

                  <td class="align-middle">
                    <button
                      class="badge badge-sm bg-gradient-success"
                      onClick={() => deleteCategory(category.name)}
                    >
                      {" "}
                      Delete
                    </button>
                  </td>
                  <td class="align-middle">
                  <Link className="badge badge-sm bg-gradient-success" to={`/admin/category/update/${category.name}`}>Edit</Link>

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

export default CategoryTable;
