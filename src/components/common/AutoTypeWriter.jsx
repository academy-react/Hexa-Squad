import React from 'react'
import { Typewriter } from "react-simple-typewriter";

const AutoTypeWriter = ({className ,Text ,typeSpeed ,loop}) => {
  return (
    <div className={className}>
      <Typewriter words={Text} loop={loop} cursor={true} cursorColor={'#000'} typeSpeed={typeSpeed} />
    </div>
  )
}

export default AutoTypeWriter