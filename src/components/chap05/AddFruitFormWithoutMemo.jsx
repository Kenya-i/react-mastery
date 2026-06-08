import React from 'react'

export const AddFruitFormWithoutMemo = ({name, setName, addFruit}) => {
    console.log("AddFruitFormWithoutMemo Rendering");
  return (
    <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <button onClick={addFruit}>追加</button>
    </div>
  )
};
