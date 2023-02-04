import React from 'react'
import styles from "../../styles/Transcript.module.css";
import Chunks from '@/components/transcript/Chunks';

const Details = () => {
  let text = "Whisper is a state of art speech recognition model created by OpenAI. In this tutorial I'll explain you how you can perform the transcription of YouTube videos into text using Whisper. This is the general workflow that we'll be covering in this tutorial. First of all we'll collect video from YouTube and from that video we extract the audio content. With that audio content we use Whisper model in order to transcribe that audio into text. Knowing that we're dealing with a deployment model what might be helpful is to change the runtime into GPU so come to runtime."
  return (
    <div className={styles.details}>
        <div className={styles.individual}>
        <div className={styles.item}>
            <h3>YouTube name: </h3>
            <h3> CIA Properties | Confidentiality, Integrity, Availability with examples</h3>
        </div>
        <div className={styles.item}>
            <h3>Subject: </h3>
            <h3> History</h3>
        </div>
        <div className={styles.item}>
            <h3>Chapter: </h3>
            <h3> Chapt1</h3>
        </div>
        </div>
        <div className={styles.chunks}>
            <Chunks text={text} />
            <Chunks text={text}/>
            <Chunks text={text}/>
            <Chunks text={text}/>
            <Chunks text={text}/>
        </div>
        {/* <button className={styles.add_notes}>Add to notes</button> */}
    </div>
  )
}

export default Details