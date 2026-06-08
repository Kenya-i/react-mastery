import React from 'react'

export const FruitListWithoutMemo = ({fruits}) => {
    console.log("FruitListWithoutMemo Rendering");
  return (
    <ul>
        {fruits.map((fruit) => (
            <li key={fruit}>{fruit}</li>
        ))}
    </ul>
  )
};
