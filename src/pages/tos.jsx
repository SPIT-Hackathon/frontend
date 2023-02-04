import React, { useState } from 'react'
import { useSpeechSynthesis } from "react-speech-kit";
import styles from "../styles/tos.module.css"

const tos = () => {
    const { speak } = useSpeechSynthesis();
    const[text, setText]=useState("")
  return (
    <div className={styles.tos}>
        <textarea onChange={(e)=>setText(e.target.value)} value={text} name="" id="" cols="60" rows="10"></textarea>
        <button onClick={() => speak({ text:text})} className={`mt-5 ${styles.tos_button}`}>Generate voice from text</button>
    </div>
  )
}

export default tos
