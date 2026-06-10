import React, { useContext } from 'react'
import { NotificationsContext } from '../../context/NotificationsContext';
import { useAtom } from 'jotai';
import { notificationsAtom } from '../../atoms/notificationsAtom';

export const NotificationBell = () => {
  const [notifications] = useAtom(notificationsAtom);
  console.log("NotificationBell Rendering");
  return (
    <div>
        <span>通知: {notifications.length}件</span>
    </div>
  )
}
