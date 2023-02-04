import React from 'react'
import styles from "../../styles/PageNavbar.module.css" 

const PageNavbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.subnav}>
        <h2>StudyPat</h2>
        <div className={styles.login}>
          <button className={styles.login_button}>Login</button>
          <button className={styles.login_button}>Register</button>
        </div>
      </div>
    </div>
  )
}

export default PageNavbar