import "./Checkbox.css";
import img2 from "../../assets/images/action.jpg";
import { Link } from "react-router-dom";

const Checkbox = ({ type = "checkbox", value, checked = false, onChange ,id}) => {
  console.log("Checkbox: ", value, checked);
  return (
    <>
      <input
      id={id}
        type={type}
        value={value}
        checked={checked}
        onChange={onChange}
        class="custom-control-input"
      />
    </>
  );
};

export default Checkbox;
