import React, { memo } from 'react'

export const FruitList = memo(({fruits}) => {
    console.log("FruitList Rendering");
  return (
    <ul>
        {fruits.map((fruit) => (
            <li key={fruit}>{fruit}</li>
        ))}
    </ul>
  )
});
