import authContext from '@/hooks/AuthContext/authContext';
import dataContext from '@/hooks/DataContext/dataContext';
import React, { useContext, useEffect } from 'react'
import styles from "../../styles/Transcript.module.css";
import TCrad from './TCrad';

const TransHistory = () => {
  const { user } = useContext(authContext);
  const { transcripts, getTranscripts } = useContext(dataContext);

  useEffect(() => {
    let formData = {
      "user_id": user ? user.user_id : "test_user_1",
    }
    getTranscripts(formData);
    console.log(transcripts)
  }, [])
  return (
    <div className={styles.history}>
      <h4>Transcript History</h4>
      <div className={styles.history_section}>
        {transcripts?.map((transcript, key) =>
          <TCrad key={key} title={transcript.title} subject={transcript.subject_name} chapter={transcript.chapter_name} youtube={transcript.video_url} tid={transcript._id} summary={transcript.summary} chunks={transcript.chunks} />
        )}
      </div>
    </div>
  )
}

export default TransHistory