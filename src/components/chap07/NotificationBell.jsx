import React, { useContext } from 'react'
import { NotificationsContext } from '../../context/NotificationsContext';

export const NotificationBell = () => {
  const {notifications} = useContext(NotificationsContext);
  console.log("NotificationBell Rendering");
  return (
    <div>
        <span>通知: {notifications.length}件</span>
    </div>
  )
}
