import React from 'react'
import { UserMenu } from './UserMenu'

export const Header = () => {
  return (
    <header style={{display: "flex", justifyContent: "space-between"}}>
        <strong>My App</strong>
        <UserMenu />
    </header>
  )
}
