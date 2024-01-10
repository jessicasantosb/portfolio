import "./ProfilesIcons.css";
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord } from "react-icons/fa";

function ProfilesIcons() {
  return (
    <div id="profile-icons">
      <a href="https://github.com/jessicasantosb" target="_blank">
        <FaGithub className="github-icon" size={30} />
      </a>
      <a href="https://www.linkedin.com/in/jessicasantosb/" target="_blank">
        <FaLinkedin className="linkedin-icon" size={30} />
      </a>
      <a href="https://discordapp.com/users/908783512662974464" target="_blank">
        <FaDiscord className="discord-icon" size={30} />
      </a>
      <a href="https://twitter.com/jessicab_dev" target="_blank">
        <FaTwitter className="twitter-icon" size={30} />
      </a>
    </div>
  );
}

export default ProfilesIcons;
