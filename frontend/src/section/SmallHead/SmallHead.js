import "./SmallHead.css";

const SmallHead = (props) => {
  return (
    <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
      <div class="bg-gradient-primary border-radius-lg pt-4 pb-3">
        <h6 class="text-white text-capitalize ps-3">{props.children}</h6>
      </div>
    </div>
  );
};

export default SmallHead;
