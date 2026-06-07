import React , { useState } from 'react'

export const UserForm = () => {
    const  [user, setUser] = useState({name: "", age:0, email: ""});

    const onChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

  return (
    <div>
        <input value={user.name} type="text" name="name"
            // onChange={(e) => setUser({ ...user, name: e.target.value})}
            onChange={onChange}
            />
        <input value={user.email} type="email" name="email"
            // onChange={(e) => setUser({ ...user, name: e.target.value})}
            onChange={onChange}
            />
        <input value={user.age} type="number" name="age" onChange={onChange}/>
        <p>
            {user.name} / {user.age}歳 / email: {user.email}
        </p>
    </div> 
  )
}
