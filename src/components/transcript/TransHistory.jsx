import React from 'react'
import styles from "../../styles/Transcript.module.css";
import TCrad from './TCrad';

const TransHistory = () => {
  return (
    <div className={styles.history}>
        <h4>Transcript History</h4>
        <div className={styles.history_section}>
            <TCrad/>
            <TCrad/>
            <TCrad/>
            <TCrad/>
            <TCrad/>
        </div>
    </div>
  )
}

export default TransHistory