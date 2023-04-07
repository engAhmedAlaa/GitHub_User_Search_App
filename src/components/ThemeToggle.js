import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

function ThemeToggle({ darkMode, onClick }) {
  return (
    <button
      className="toggle-theme"
      onClick={onClick}
      aria-label="Toggle Theme"
    >
      <span className="theme-name">{darkMode ? 'Light' : 'Dark'}</span>
      {darkMode ? (
        <BsFillSunFill className="theme-icon" />
      ) : (
        <BsFillMoonStarsFill className="theme-icon" />
      )}
    </button>
  );
}

export default ThemeToggle;
