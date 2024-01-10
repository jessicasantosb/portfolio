import "./Buttons.css";
import { FaTelegramPlane, FaFileDownload } from "react-icons/fa";
function Buttons({ name, text }) {
  if (name === "telegram") {
    return (
      <div className="btn">
        <button className="btn-wrapper">
          <a
            className="btn-link"
            href="https://t.me/jessicasantosb"
            target="_blank"
            rel="noopener noreferrer"
          >
            {text}
          </a>
          <div className="btn-div">
            <FaTelegramPlane className="btn-icon"  size={30} />
          </div>
        </button>
      </div>
    );
  }

  if (name === "curriculum") {
    return (
      <div className="btn">
        {" "}
        <button className="btn-wrapper">
          <a
            className="btn-link"
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            {text}
          </a>
          <div className="btn-div">
            <FaFileDownload className="btn-icon" size={30} />
          </div>
        </button>
      </div>
    );
  }
}

export default Buttons;
