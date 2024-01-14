import "./Welcome.css";
import img from '../../assets/images/John-Wick-3.jpg';

const Welcome = () => {
  return (
    <section className="banner">
    <div className="banner-card">

    <div class="page-header min-height-500 border-radius-xl mt-4 ">
      <span class="mask   opacity-6">
        <img src="https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" />{" "}
      </span>
    </div>
      <div className="card-content">
        <div className="card-info">

          <div className="genre">
            <ion-icon name="film"></ion-icon>
            <span>Action/Thriller</span>
          </div>

          <div className="year">
            <ion-icon name="calendar"></ion-icon>
            <span>2019</span>
          </div>

          <div className="duration">
            <ion-icon name="time"></ion-icon>
            <span>2h 11m</span>
          </div>

          <div className="quality">4K</div>

        </div>

        <h2 className="card-title">John Wick: Chapter 3 - Parabellum</h2>
      </div>

    </div>
  </section>
  );
};

export default Welcome;
