import React from 'react'
import styles from './Navigation.module.scss'

const Navigation = (props) => {
  return (
    <div className={styles.dv_logout}>
      {props.isLoggedIn && <span className={styles.spn_logout} onClick={props.onLogout}>خروج</span>}
    </div>
  )
}

export default Navigation