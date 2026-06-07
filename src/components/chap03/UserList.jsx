import React, { useState } from 'react'

export const UserList = () => {
    const [newUserName, setNewUserName] = useState("");
    const [users,setUsers] = useState([
        { id: crypto.randomUUID(), name: "taro"},
        { id: crypto.randomUUID(), name: "jiro"},
    ]);

    const addUser = () => {
        setUsers([...users, {id: crypto.randomUUID(), name: newUserName }]);
    };

    const updateUserName = (id, newName) => {
        setUsers(users.map((user) => user.id === id ? { ...user, name: newName } : user))
    };

  return (
    <div>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    ID: {user.id}, Name: {user.name}
                </li>
            ))}
        </ul>
        <input type="text" value={newUserName} onChange={(e) => setNewUserName(e.target.value)}/>
        <button onClick={addUser}>追加</button>
    </div>
  )
}
