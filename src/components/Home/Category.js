import React from "react";
import styles from "../../styles/Category.module.css";
import Link from "next/link";

const Category = () => {
  return (
    <div className={styles.category}>
      <p>Browse Categories</p>
      <div className={styles.subcat}>
        <Link href="/transcript">
          <div className={`${styles.cat} ${styles.red}`}>Notes</div>
        </Link>
        <Link href="/ocr">
          <div className={`${styles.cat} ${styles.blue}`}>OCR</div>
        </Link>
        <Link href="/dnd">
          <div className={`${styles.cat} ${styles.purple}`}>Do not Distrub</div>
        </Link>
        <Link href="/solver">
          <div className={`${styles.cat} ${styles.red}`}>Equation solver</div>
        </Link>
      </div>
    </div>
  );
};

export default Category;
