import React, { useState } from 'react'
// import { FruitList } from './FruitList';
// import { AddFruitForm } from './AddFruitForm';
import { AddFruitFormWithoutMemo } from './AddFruitFormWithoutMemo';
import { FruitListWithoutMemo } from './FruitListWithoutMemo';

export const FruitManagerWithoutMemo = () => {
  const [fruits, setFruits] = useState(["orange", "apple", "banana"]);
  const [name, setName] = useState("");

  const [keyword, setKeyword] = useState("");

  const addFruit = () => {
    setFruits([...fruits,name]);
  };

  const filterdFruits = () => {
      return fruits.filter((fruit) => fruit.includes(keyword));
  };

  return (
    <div>
        <AddFruitFormWithoutMemo name={name} setName={setName} addFruit={addFruit}/>
        <div>
            <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
        </div>
        <FruitListWithoutMemo fruits={filterdFruits()}/>
    </div>
  )
}
