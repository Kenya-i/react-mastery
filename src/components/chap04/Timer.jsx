import React, { useEffect, useState } from 'react'

export const Timer = () => {
    const [time, setTime] = useState(0);
    

    useEffect(() => {
        setInterval(() => setTime((prevTime) => prevTime + 1), 1000);
    }, []);
    
  return (
    <div>
        {time}
    </div>
  )
}
