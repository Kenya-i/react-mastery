import React, {useState} from 'react'

export const UserRow = ({user, deleteUser}) => {
  const [editingName, setEditingName] = useState(user.name);

  console.log("userRow", user.name)

  return (
    <li>
        ID: {user.id} Current Name: {user.name}
        <br />
        <input type="text" value={editingName} onChange={(e) => setEditingName(e.target.value)}/>
        <button onClick={() => deleteUser(user.id)}>削除</button>
    </li>
  );
};
