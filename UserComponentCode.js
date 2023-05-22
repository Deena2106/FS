import React, { useContext, useEffect } from 'react';
import { UserContext } from './App';

const UserComponentCode = () => {
  const { userState, setUserState } = useContext(UserContext);

  useEffect(() => {
    const interval = setInterval(() => {
      const users = Object.keys(userState);
      const randomUser = users[Math.floor(Math.random() * users.length)];

      setUserState((prevState) => ({
        ...prevState,
        [randomUser]: !prevState[randomUser],
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, [userState, setUserState]);

  return (
    <div>
      <h1>User List</h1>
      {Object.entries(userState).map(([user, online]) => (
        <div key={user}>
          <span>{user}</span>
          <span>{online ? 'Online' : 'Offline'}</span>
        </div>
      ))}
    </div>
  );
};

export default UserComponentCode;
