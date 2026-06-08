import React, { useState } from 'react'

export const UserDetail = () => {
  const [name, setName] =useState("");
  
  if (name != "") {
    const [age, setAge] = useState(20);
  }

  return (
    <div>UserDetail</div>
  )
}
