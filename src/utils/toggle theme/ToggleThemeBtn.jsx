import { FaMoon, FaSun } from 'react-icons/fa';
import './ToggleThemeBtn.css';

export default function ToggleBtn(props) {
  const link = document.querySelector("link[rel='icon']");

  props.isDark
    ? link.setAttribute('href', './darkFavicon.ico')
    : link.setAttribute('href', './lightFavicon.ico');

  return (
    <>
      {props.isDark ? (
        <FaSun className='toggle-icon' size={16} onClick={props.toggleDark} />
      ) : (
        <FaMoon className='toggle-icon' size={16} onClick={props.toggleDark} />
      )}
    </>
  );
}
