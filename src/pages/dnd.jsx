import React, { useEffect, useState } from 'react'
import styles from "../styles/dnd.module.css"
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const dnd = () => {

    const handle = useFullScreenHandle();
    const[time, setTime]=useState()
    const [full, setFull]=useState(false)
    const[counter, setCounter]=useState(15)
    const handleSubmit =(e)=>{
        handle.enter(e)
        setTimeout(()=>{
            handle.exit(e)
        },counter*1000)
    }

    useEffect(()=>{
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    },[counter])
  return (
    // <FullScreen  handle={handle}>
    <div className={styles.dnd}>
        <input onChange={(e)=>setTime(e.target.value)} type="number" name="" id="" placeholder='Enter the time in minutes'/>
        <p>Once you enter in dnd mode you can not exit full screen until the time is over</p>
        <p>(Use ESC for emergency)</p>
        <button onClick={handleSubmit}>Start</button>

        {<FullScreen  handle={handle}>
            <div className={styles.fscreen}>
                <h1 className={styles.time}>Time remaining: {counter}</h1>
            </div>
        </FullScreen>}
    </div>
    // </FullScreen>
  )
}

export default dnd