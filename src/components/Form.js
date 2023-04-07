import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

function Form({ setUserName }) {
  const [userInput, setUserInput] = useState('');

  function handleChange(event) {
    setUserInput(event.target.value);
  }

  function handelSubmit(event) {
    event.preventDefault();
    if (userInput === '') return;
    setUserName(userInput.trim());
  }

  return (
    <form className="main-form" onSubmit={handelSubmit}>
      <label htmlFor="username" className="form-icon">
        <BiSearch />
      </label>
      <input
        type="text"
        className="form-input"
        id="username"
        value={userInput}
        onChange={handleChange}
        placeholder="Search GitHub username..."
        required
        autoFocus
      />
      <button className="form-btn">Search</button>
    </form>
  );
}

export default Form;
