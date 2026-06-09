import React, { useContext } from 'react'
import { NotificationsContext } from '../../context/NotificationsContext';

export const NotificationButton = () => {
  const {addNotification} = useContext(NotificationsContext);
  console.log("NotificationButton Rendering");
  return (
    <div>
        <button onClick={addNotification}>通知を追加</button>
    </div>
  )
}
