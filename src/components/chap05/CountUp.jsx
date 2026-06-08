import React, { useRef, useState } from 'react'

export const CountUp = () => {
  const [count, setCount] = useState(0);
  const clickCountRef = useRef(0);

  const handleStateClick = () => {
    setCount(count + 1);
  }

  const handleRefClick = () => {
    clickCountRef.current += 1;
    console.log("Refの値:", clickCountRef.current);
  };

  console.log("COuntUp Renderring");

  return (
    <div>
        <p>State(画面に反映): {count}</p>
        <button onClick={handleStateClick}>Stateを増やす</button>

        <p>Ref(内部で保持のみ): {clickCountRef.current}</p>
        <button onClick={handleRefClick}>Refを増やす</button>
    </div>
  )
}
