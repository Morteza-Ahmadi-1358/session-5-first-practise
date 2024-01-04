import React from 'react'
import Navigation from './Navigation'
import styles from './Header.module.scss'

const Header = (props) => {
  return (
    <div className={`${styles.dv_header_content}`}>
      <h3>تحلیل داده</h3>
      <Navigation isLoggedIn={props.isLoggedIn} onLogout={props.onLogout} />
    </div>
  )
}

export default Header