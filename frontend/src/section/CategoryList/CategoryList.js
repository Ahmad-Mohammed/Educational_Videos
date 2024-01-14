import "./CategoryList.css";
import { CategoryCard } from "../../components/index";
import { useEffect, useState } from "react";
import axios from "axios";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    await axios.get("http://127.0.0.1:8000/api/categories").then(({ data }) => {
      setCategories(data.data);
      // console.log(data.data);
    });
  };
 
  return (
    <section class="category" id="category">
      <h2 class="section-heading">Category</h2>
      <div class="category-grid">
        {categories.map((category) => (
          <CategoryCard category={category} />
        ))}

      </div>
    </section>
  );
};

export default CategoryList;
