import Form from './Form';
import User from './User';
import { useState, useEffect } from 'react';

function Main() {
  const [userName, setUserName] = useState('octocat');
  const [userData, setUserData] = useState(null);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState(null);
  const API_URL = 'https://api.github.com/users/';

  useEffect(() => {
    let ignore = false;

    async function getUser() {
      setStatus('loading');
      try {
        const response = await fetch(`${API_URL}${userName}`);
        if (!response.ok) throw new Error('User Not Fount');
        const data = await response.json();
        if (!ignore) {
          setUserData(data);
          setStatus('success');
        }
      } catch (error) {
        setStatus('error');
        setError(error);
      }
    }

    getUser();
    return () => {
      ignore = true;
    };
  }, [userName]);

  return (
    <main className="main-content">
      <Form setUserName={setUserName} />
      {status === 'loading' ? (
        <div className="loading">
          <span className="circle"></span>
        </div>
      ) : status === 'error' ? (
        <div className="error">
          <span className="message">{error.message}</span>
        </div>
      ) : (
        <User user={userData} />
      )}
    </main>
  );
}

export default Main;
