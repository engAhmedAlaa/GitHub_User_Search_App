import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

function ThemeToggle({ theme, handleClick }) {
  return (
    <button
      className="toggle-theme"
      onClick={handleClick}
      aria-label="Toggle Theme"
    >
      <span className="theme-name">{theme === 'dark' ? 'Light' : 'Dark'}</span>
      {theme === 'dark' ? (
        <BsFillSunFill className="theme-icon" />
      ) : (
        <BsFillMoonStarsFill className="theme-icon" />
      )}
    </button>
  );
}

export default ThemeToggle;
