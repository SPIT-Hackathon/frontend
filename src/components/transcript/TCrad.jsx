import React from 'react'
import styles from "../../styles/Transcript.module.css";

const colors=['red', 'blue', 'green', 'purple']

const TCrad = () => {
  return (
    <div className={styles.tcard}>
        <div style={{backgroundColor:colors[[Math.floor(Math.random()*colors.length)]]}} className={styles.tid}>
            CIA Properties | Confidentiality, Integrity, Availability with examples
        </div>
        <div className={styles.tbody}>
            <p>Subject: History</p>
            <p>Chapter: Chapter2</p>
            <a href="">YT Link</a>
        </div>
    </div>
  )
}

export default TCrad