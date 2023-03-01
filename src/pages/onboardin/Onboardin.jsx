import "./Onboardin.scss";
import logoOnboardin from "../../assets/LOGO1.png";
import imgOnboardin1 from "../../assets/onboardin1.png";
import imgOnboardin2 from "../../assets/onboardin2.png";
import imgOnboardin3 from "../../assets/onboardin3.png";
import { useState } from "react";
import {Link, NavLink} from "react-router-dom"

function Onboardin() {
  const [click, setClick]=useState(false)
  // const navigate = useState()
  //   const Click =(e) =>{
  //     e.preventDefault()
  //     navigate("/")
  //   }
  return (
    <div className="onboardin">

      <div className="logo-top">
        <img className="img-logo" src={logoOnboardin}></img>
      </div>

      <div className="img-1">
        <img src={imgOnboardin1} />
      </div>

      <div className="content-title">
        <p className="comfort-food-title">
          <b>Your comfort food lies here</b>
        </p>
        <p className="order-title">Order your favourtie meal and taste
        <br/> greatness</p>
        <div className="pagination">
        </div>
        
        <button className="btn-onboardin">
          <Link className="link-ctn" to="/onboardin2">Continue</Link>
          </button>
        <p className="skip-onboardin"><Link className="skip-singin" to="/singin">Skip</Link></p>
      </div>

     <div className="img-elips">
        <img className="img-2" src={imgOnboardin2} />
      </div>

     <div className="img-mini">
      <img className="img-3" src={imgOnboardin3}></img>
      </div>
    </div>
  );
}

export default Onboardin;
