import React, { useEffect, useRef, useState } from 'react'
import "../styles/stopwatch.css"


const Stopwatch = () => {
  const [time, setTime] = useState(0)
  const [flag, setFlag] = useState(false);
  const intervalIDRef = useRef(null);
  const starttimeRef = useRef(0)
  let timer;
  let hour = Math.floor(time / (1000 * 60 * 60))
  let minutes = Math.floor(time / (1000 * 60) % 60)
  let seconds = Math.floor(time / (1000) % 60)
  let milisec = Math.floor((time % 1000) / 10)


  

  useEffect(() => {
    if (flag) {
      intervalIDRef.current = setInterval(() => {
        setTime(Date.now() - starttimeRef.current)
      }, 10)
    }
    return () => clearInterval(intervalIDRef.current);
  }, [flag])



  // function handletimer() {
  //   starttimeRef = setTimeout(() => {
  //     setTime(Date.now() - starttimeRef.current)
  //   }, 1000);
  // }
  const handleFlags = () => {
    setFlag(false)

  }
  const handleFlag = () => {

    setFlag(true)
    starttimeRef.current = Date.now() - time

  }


  return (
    <div className='body'>
      <h1 className='timer'>{`${minutes}/${seconds}/${milisec}`}</h1>
      <div className='Btn'>
        <button onClick={handleFlag}>Start</button>
        <button onClick={handleFlags}>Stop</button>
        <button onClick={() => {
          setTime(0)
        }}>Reset</button>
      </div>


    </div>
  )
}

export default Stopwatch