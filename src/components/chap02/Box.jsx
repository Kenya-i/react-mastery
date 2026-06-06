import React from 'react'

export const Box = ({children}) => {
  return (
    <div style={{border: "2px solid #333", padding:"12px", margin: "8px"}}>
        {children}
    </div>
  )
}
