import logo5 from "../../assets/LOGO1.png";
import imgHome1 from "../../assets/Restaurant.png";
import "./Home.scss";

function HomeRestaurent() {
  return (
    <div className="home-restaurent">
      <div className="img-logo">
        <img className="img-logo5" src={logo5} />
      </div>
      <div className="img-restaurent">
        <img className="restaurent" src={imgHome1} />
      </div>
      <div className="content-restaurent">
        <button className="btn restaurent-singin">
          <div className="singin">Sing in</div>
          <div className="icon-next"><i className="fa-solid fa-regular fa-arrow-right"></i></div>
        </button>
      </div>
      <div className="content-restaurent">
        <button className="btn restaurent-singup">
          <div className="singup">Sing up</div>
          <div className="icon-next"><i className="fa-solid fa-regular fa-arrow-right"></i></div>
        </button>
      </div>
    </div>
  );
}

export default HomeRestaurent;
