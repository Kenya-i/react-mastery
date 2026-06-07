import React, { useState } from 'react'

export const CountUp = () => {
    // let count = 0;
    const [count, setCount] = useState(0);

    const handleClick = () => {
        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    }

    console.log("CountUpレンダリングされました。現在の値:" , count);
  return (
    <div>
        <p>ボタンを押した回数: {count}</p>
        <button onClick={handleClick}>+1</button>
    </div>
  )
}
