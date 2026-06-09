import React, { createContext, useState } from 'react'

export const NotificationsContext = createContext();

export const NotificationsProvider = ({children}) => {

    const [notifications,setNotifications] = useState([]);
    
      const addNotification = () => setNotifications(
        (prevNotifications) => [...prevNotifications, {id: Date.now(), text: "通知"}]);
    
  return (
    <NotificationsContext.Provider value={{notifications, addNotification}}>
        {children}
    </NotificationsContext.Provider>
  )
}
