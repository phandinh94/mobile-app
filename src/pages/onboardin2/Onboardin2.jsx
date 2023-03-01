import "../../assets/onboardin2-2.png"
import "./Onboardin2.scss"
import logoOnboardin2 from "../../assets/LOGO1.png";
import imgOnboardin21 from "../../assets/onboardin2-2.png";
import imgOnboardin22 from "../../assets/on23.png";
import { Link } from "react-router-dom";

function Onboardin2() {
    
  return (
    <div className="onboardin">

      <div className="test-fresh logo-top">
        <img className="test-fresh img-logo" src={logoOnboardin2}></img>
      </div>

      <div className="test fresh img-1">
        <img src={imgOnboardin21} />
      </div>

      <div className="content-title">
        <p className="comfort-food-title">
          <b>Test Fresh delicious meals <br/> anytime</b>
        </p>
        <p className="order-title2">We provide well prepared meal at all
        <br/>hours of the day</p>
        <div className="pagination">
        </div>

        <button className="btn-onboardin"><Link className="link-ctn" to="/onboardin3">Continue</Link>
        </button>
        <p className="skip-on2"><Link className="skip-singin" to="/singin">Skip</Link></p>
      </div>

     <div className="img-elips">
        <img className="img-2" src={imgOnboardin22} />
      </div>


    </div>
  );
}

export default Onboardin2;