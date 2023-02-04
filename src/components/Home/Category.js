import React from 'react'
import styles from "../../styles/Category.module.css"

const Category = () => {
  return (
    <div className={styles.category}>
      <p>Browse Categories</p>
      <div className={styles.subcat}>
        <div className={`${styles.cat} ${styles.red}`}>Get Notes</div>
        <div className={`${styles.cat} ${styles.blue}`}>OCR</div>
        <div className={`${styles.cat} ${styles.purple}`}>Cat 3</div>
        <div className={`${styles.cat} ${styles.red}`}>Cat 4</div>
      </div>
    </div>
  )
}

export default Category