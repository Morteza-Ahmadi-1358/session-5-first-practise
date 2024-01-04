import React, { useEffect, useState } from 'react'
import Button from './Button'
import styles from './Login.module.scss'

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (username.length === 0 || password.length === 0) {
        setButtonIsDisabled(true);
      }
      else{
        setButtonIsDisabled(false);
      }
    }, 2000);
    return () => {
      clearTimeout(timerId);
    }
  },[username, password]);
  const submitHandler = (e) => {
    e.preventDefault();
    props.onLogin(username, password);
  }
  const usernameChangeHandler = (e) => {
    setUsername(e.target.value)
  }
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value)
  }
  return (
    <div className={`${styles.dv_main_content}`}>
      <form onSubmit={submitHandler}>
        <div className={`${styles.dv_user_info}`}>
          <label htmlFor="username">نام کاربری</label>
          <input type="text" name="username" id="username" placeholder='نام کاربری' value={username} onChange={usernameChangeHandler} className={`${styles.txt_username}`} />
          <label htmlFor="password">کلمه عبور</label>
          <input type="password" name="password" id="password" placeholder='کلمه عبور' value={password} onChange={passwordChangeHandler} className={`${styles.txt_password}`} />
        </div>
        <div className={`${styles.dv_login}`}>
          <Button isDisabled={buttonIsDisabled} />
        </div>
      </form>
    </div>
  )
}

export default Login