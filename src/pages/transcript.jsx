import React, { useState } from "react";
import styles from "../styles/Transcript.module.css";
import axios from "axios";

const transcript = () => {
  const [link, setLink] = useState("");
  const [subject, setSubject] = useState("");
  const [chapter, setChapter] = useState("");
  const [yid, setYid]=useState("")
  const initialSubs = ["Psychology", "Geography", "History"];

  const handleSubmit = () => {
    setYid(link.split("=")[1])
    let body={
      video_url:"https://www.youtube.com/watch?v=KYxrBuz1vMY"
    }

    axios.post("http://6828-107-178-220-171.ngrok.io/create_notes/", body)
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{console.log(err)})
  };

  return (
    <div className={styles.transcript}>
      <div className={styles.subhome}>
        <input
          onChange={(e) => setLink(e.target.value)}
          type="text"
          placeholder="Please enter YouTube video link"
        />
        <div className={styles.option}>
          <select
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            name="subject"
            id="subjecr"
          >
            {initialSubs.map((sub) => {
              return <option value={sub}>{sub}</option>;
            })}
          </select>
          <input
            onChange={(e) => setChapter(e.target.value)}
            type="text"
            placeholder="Enter Chapter name"
          />
        </div>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${yid}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <button onClick={() => handleSubmit()}>Get Notes</button>
      </div>
    </div>
  );
};

export default transcript;
