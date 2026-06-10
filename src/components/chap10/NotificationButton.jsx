import React, { useContext } from 'react'
import { NotificationsContext } from '../../context/NotificationsContext';
import { useAtom } from 'jotai';
import { notificationsAtom } from '../../atoms/notificationsAtom';

export const NotificationButton = () => {
  const [, setNotifications] = useAtom(notificationsAtom);
  console.log("NotificationButton Rendering");
  return (
    <div>
        <button onClick={() => setNotifications(
        (prevNotifications) => [...prevNotifications, {id: Date.now(), text: "通知"}])}>通知を追加</button>
    </div>
  )
}
