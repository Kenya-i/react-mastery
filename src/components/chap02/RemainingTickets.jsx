import React from 'react'

export const RemainingTickets = ({remaining, userName}) => {
  return (
    <div>
        <p>{userName || "ゲスト"}</p>
        残りチケット: {remaining ?? "-"}枚
    </div>
  )
}
