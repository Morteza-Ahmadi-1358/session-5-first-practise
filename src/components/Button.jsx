import React from 'react'
import styles from './Button.module.scss'

const Button = (props) => {
  return (
    <button className={`${styles.btn_login}`} type='submit' onClick={props.onClick} disabled={props.isDisabled}>ورود</button>
  )
}

export default Button