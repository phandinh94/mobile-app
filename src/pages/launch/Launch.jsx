import "./Launch.scss";
import logo from "../../assets/LOGO.png";

function Launch() {
  return (
    <div className="launch-main">
      <div className="logo-app">
        <div className="img-logo">
          <img src={logo} />
          <p className="store-title">
            <b>Tasty Town</b>
          </p>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default Launch;
