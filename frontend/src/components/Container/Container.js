// import { Footer, Header } from "./section/index";
import { Footer, Header } from "../../section/index";
import "./Container.css";
const Container = (props) => {
  return (
    <>
      <div>{props.children}</div>
    </>
  );
};

export default Container;
