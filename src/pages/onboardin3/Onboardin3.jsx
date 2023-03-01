import "./Onboardin3.scss";
import imglogo3 from "../../assets/LOGO1.png";
import imgOn1 from "../../assets/imgOn1.png";
import imgBg2 from "../../assets/on3-get.png";
import imgBg1 from "../../assets/on23.png";
import { Link } from "react-router-dom";
function Onboardin3() {
  return (
    <div className="onboardin3">
      <div className="img-logo">
        <img className="logo-4" src={imglogo3} />
      </div>
      <div className="img-on3">
        <img className="picture-get" src={imgOn1} />
      </div>
      <div className="content-titleget">
        <p className="main-title">
          <b>Deviler to your home</b>
        </p>
        <p className="content-title">
          Enjoy a fast and smooth deliver at your
          <br /> doorstep
        </p>
        <button className="btn-getstart"><Link className="link-start" to="/getstart">Get started</Link></button>
      </div>
      <div className="bg-1">
        <img src={imgBg2} />
      </div>
      <div className="bg-2">
        <img className="bg2-bt" src={imgBg1} alt="photo" />
      </div>
    </div>
  );
}

export default Onboardin3;
