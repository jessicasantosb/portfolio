import { useNavigate } from "react-router-dom";
import "./Buttons.css";
import { FaDownload, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";

function ButtonResume({ text }) {
  const navigate = useNavigate();

  const handleBtnResumeClick = () => {
    navigate("/resume");
  };

  return (
    <button
      className="btn resume center disable-selection"
      onClick={handleBtnResumeClick}
    >
      {text}
      <FaExternalLinkAlt className="btn-icon" />
    </button>
  );
}

function ButtonDownload({ text, handleBtnDownloadClick }) {

  return (
    <button
      id="btnDownload"
      className="btn download center disable-selection"
      onClick={handleBtnDownloadClick}
    >
      {text}
      <FaDownload className="btn-icon" />
    </button>
  );
}

function ButtonBack({ text }) {
  const navigate = useNavigate();

  const handleBtnBackClick = () => {
    navigate("/");
  };

  return (
    <button className="btn back center disable-selection" onClick={handleBtnBackClick}>
      <FaArrowLeft className="btn-icon back" />
      <span>{text}</span>
    </button>
  );
}

export { ButtonResume, ButtonDownload, ButtonBack };
