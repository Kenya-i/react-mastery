import React, { memo } from 'react'

export const AddFruitForm = memo(({name, setName, addFruit}) => {
    console.log("AddFruitFOrm Rendering");
  return (
    <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <button onClick={addFruit}>追加</button>
    </div>
  )
});
