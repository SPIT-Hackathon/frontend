import React from 'react'
import styles from "../../styles/Chunks.module.css"

const Chunks = ({ data }) => {

  return (
    <div className={styles.chunks}>
      <div className={styles.checkbox}>
        <input type="checkbox" name="Add to note" id="note" />
        <label htmlFor="note">Add to note</label>
      </div>
      <p>
        {data}
      </p>

    </div>
  )
}

export default Chunks