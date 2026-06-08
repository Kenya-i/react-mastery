import React, { useCallback, useMemo, useState } from 'react'
import { FruitList } from './FruitList';
import { AddFruitForm } from './AddFruitForm';

export const FruitManager = () => {
  const [fruits, setFruits] = useState(["orange", "apple", "banana"]);
  const [name, setName] = useState("");

  const [keyword, setKeyword] = useState("");

  const addFruit = useCallback(()=> {
    setFruits([...fruits,name]);
  },[fruits, name]);

  const filterdFruits = useMemo(() => {
      return fruits.filter((fruit) => fruit.includes(keyword));
  }, [fruits, keyword]);

  return (
    <div>
        <AddFruitForm name={name} setName={setName} addFruit={addFruit}/>
        <div>
            <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
        </div>
        <FruitList fruits={filterdFruits}/>
    </div>
  )
}
