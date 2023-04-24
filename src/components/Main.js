import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Form from './Form';
import User from './User';

function Main() {
  const [userName, setUserName] = useState('octocat');
  const { data, status, error, isPaused } = useQuery({
    queryKey: ['users', userName],
    queryFn: fetchUser,
  });
  const API_URL = 'https://api.github.com/users/';

  async function fetchUser({ queryKey }) {
    try {
      const { data } = await axios.get(`${API_URL}${queryKey[1]}`);
      return data;
    } catch (error) {
      if (error.response) throw new Error(error.response.data.message);
      else if (error.request) throw new Error(error.message);
      throw new Error(`Error: ${error.message}`);
    }
  }

  return (
    <main className="main-content">
      <Form setUserName={setUserName} />
      {isPaused && data === undefined ? (
        <div className="message">
          <span className="paused">No Internet Connection</span>
        </div>
      ) : status === 'loading' ? (
        <div className="loading">
          <span className="circle"></span>
        </div>
      ) : status === 'error' ? (
        <div className="message">
          <span className="error">{error.message}</span>
        </div>
      ) : (
        <User user={data} />
      )}
    </main>
  );
}

export default Main;
