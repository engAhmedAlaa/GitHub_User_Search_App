import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import { useState, useEffect } from 'react';

function getTheme() {
  if (localStorage.getItem('theme')) return localStorage.getItem('theme');
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function Header() {
  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  function handleClickThemeToggle() {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  }

  document.documentElement.className = theme === 'dark' ? 'dark' : 'light';

  return (
    <header className="main-header">
      <Logo theme={theme} />
      <ThemeToggle theme={theme} handleClick={handleClickThemeToggle} />
    </header>
  );
}

export default Header;
