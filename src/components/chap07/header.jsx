import React from 'react'
import { UserMenu } from './UserMenu'
import { NotificationBell } from './NotificationBell'

export const Header = () => {
  return (
    <header style={{display: "flex", justifyContent: "space-between"}}>
        <strong>My App</strong>
        <NotificationBell/>
        <UserMenu />
    </header>
  )
}
