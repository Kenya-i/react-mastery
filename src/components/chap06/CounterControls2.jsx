import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterControls2 = () => {
  const {count, increment, decrement, reset} = useCounter(10);

  return (
    <div>
        <p>カウント: {count}</p>
        <div>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>リセット</button>
        </div>
    </div>
  )
}
