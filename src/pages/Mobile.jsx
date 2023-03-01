import HomeRestaurent from "./home/Home";
import Launch from "./launch/Launch";
import Onboardin from "./onboardin/Onboardin";
import Onboardin2 from "./onboardin2/Onboardin2";
import Onboardin3 from "./onboardin3/Onboardin3";
import { Link, Outlet } from "react-router-dom";

function Mobile() {
  return (
    <>

      <button className="btn-main">
       

        <Outlet/>
      </button>
    </>
  );
}

export default Mobile;
