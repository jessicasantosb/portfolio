import "./ProfilesIcons.css";
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord, FaTelegramPlane } from "react-icons/fa";

function ProfilesIcons() {
  return (
    <div id="profile-icons">
      <a href="https://github.com/jessicasantosb" target="_blank">
        <FaGithub className="icon github" />
      </a>
      <a href="https://www.linkedin.com/in/jessicasantosb/" target="_blank">
        <FaLinkedin className="icon linkedin" />
      </a>
      <a href="https://discordapp.com/users/908783512662974464" target="_blank">
        <FaDiscord className="icon discord" />
      </a>
      <a href="https://twitter.com/jessicab_dev" target="_blank">
        <FaTwitter className="icon twitter" />
      </a>
      <a href="https://t.me/jessicasantosb" target="_blank">
        <FaTelegramPlane className="icon telegram" />
      </a>
    </div>
  );
}

export default ProfilesIcons;
