import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import { useState, useEffect } from 'react';

function Header() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') !== null
      ? JSON.parse(localStorage.getItem('darkMode'))
      : window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  function handleClickThemeToggle() {
    setDarkMode(!darkMode);
  }

  if (document.body.className === '')
    document.body.className = darkMode ? 'dark' : 'light';

  return (
    <header className="main-header">
      <Logo darkMode={darkMode} />
      <ThemeToggle darkMode={darkMode} onClick={handleClickThemeToggle} />
    </header>
  );
}

export default Header;
