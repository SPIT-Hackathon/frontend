import React from 'react'
import styles from "../../styles/Chunks.module.css"

const Chunks = () => {
  return (
    <div className={styles.chunks}>
        <div className={styles.checkbox}>
            <input type="checkbox" name="Add to note" id="note" />
            <label htmlFor="note">Add to note</label>
        </div>
        <p>
        Whisper is a state of art speech recognition model created by OpenAI. In this tutorial I'll explain you how you can perform the transcription of YouTube videos into text using Whisper. This is the general workflow that we'll be covering in this tutorial. First of all we'll collect video from YouTube and from that video we extract the audio content. With that audio content we use Whisper model in order to transcribe that audio into text. Knowing that we're dealing with a deployment model what might be helpful is to change the runtime into GPU so come to runtime.
        </p>
    
    </div>
  )
}

export default Chunks