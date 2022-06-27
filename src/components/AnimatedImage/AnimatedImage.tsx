import React, { useEffect, useState } from 'react'
import frames from '../../assets/frames/';

export const AnimatedImage = () => {
  const [currentFrame, setCurrentFrame] = useState(frames[0]);

  const startAnimation = () => {
    let idx = 0;
    const delay = 200;

    frames.map((frame, index) => {
      setTimeout(() => {
        setCurrentFrame(frame)
      }, delay*index);
      idx = index;
    });

    setTimeout(() => {
      setCurrentFrame(frames[0])
    }, delay * (idx+1))
  };
  
    return (
    <div>
        <img src={currentFrame} onMouseOver={startAnimation} />
    </div>
  )
}
