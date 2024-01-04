import { useEffect, useState } from 'react'
import styles from './App.module.scss'
import Header from './components/Header'
import Login from './components/Login'
import Welcome from './components/Welcome'
import {getUsers} from './database/Users'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (token === 'Ok') {
      setIsLoggedIn(true);
    }
  }, []);
  const users = getUsers();
  let invalidUser = false;
  let invalidPassword = false;
  const token = localStorage.getItem('token');
  const loginHandler = (username, password) => {
    {
      users.map((user) => {
        if (user.username != username) {
          invalidUser = true;
        }
        if (user.username === username && user.password != password) {
          invalidUser = false;
          invalidPassword = true;
        }
        if (user.username === username && user.password === password) {
          invalidUser = false;
          invalidPassword = false;
          localStorage.setItem('token', 'Ok');
          setIsLoggedIn(true);
          return;
        }
      });
    }
    if (invalidUser) {
      alert('کاربری با این مشخصات وجود ندارد!');
    }
    if (invalidPassword) {
      alert('کلمه عبور صحیح نمی‌باشد!');
    }
  }
  const logoutHandler = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  }
  return (
    <div className={`${styles.dv_main_content}`}>
      <Header isLoggedIn={isLoggedIn} users={users} onLogout={logoutHandler} />
      {!isLoggedIn && <Login onLogin={loginHandler} />}
      {isLoggedIn && <Welcome onLogout={logoutHandler} />}
    </div>
  )
}

export default App