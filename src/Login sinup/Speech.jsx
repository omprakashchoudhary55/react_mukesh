import React from 'react'
import "./speech.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const Speech = () => {

  const startListening = () => SpeechRecognition.startListening({ continuous: true, language:"en-IN" });
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null
  }

  return (
    <div className='container'>
      <h1>Speech to text Converter</h1>
      <br />
      <p>A React hook that converts speech from the microphone to text
       and makas it available to your React components</p>


      <div className='main-content'>

  {transcript}

      <div className='btn'>
      <button>Copy</button>
      <button onClick={startListening}>Start Listening</button>
      <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
      </div>
      </div>

      
    </div>
  )
}

export default Speech

