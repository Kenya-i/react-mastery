import React, { useState } from 'react'

export const AddUserForm = ({addUser}) => {
  const [newUserName, setNewUserName] = useState("");

  return (
    <>
        <input type="text" value={newUserName} onChange={(e) => setNewUserName(e.target.value)}/>
        <button onClick={() => addUser(newUserName)}>追加</button>
    </>
  )
}
