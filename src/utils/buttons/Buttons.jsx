import "./Buttons.css";
import { FaFileDownload } from "react-icons/fa";

function Buttons({ text }) {
    return (
      <div className="btn btn-curriculum disable-selection">
        {" "}
        <button className="btn-wrapper">
          <a
            className="btn-link center"
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            {text}
          </a>
          <div className="btn-div">
            <FaFileDownload className="btn-icon" />
          </div>
        </button>
      </div>
    );
}

export default Buttons;
