import React from 'react'
import { useSpeechSynthesis } from "react-speech-kit";

function TextToSpeechComp() {
    const { speak } = useSpeechSynthesis();
    return (
        
        <div>
            <button className='' onClick={() => speak({ text: 'Indias modern history consists of war, rebellion, independence, and all that comes along with the establishment of a new nation .' })}>Speak</button>
        </div>
    )
}

export default TextToSpeechComp;