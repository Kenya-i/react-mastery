import React from 'react'

export const Notification = ({count}) => {
  return (
    <div>
        新着メッセージ: {count}件
        {count > 0 && <span style={{color: "red"}}>(未読あり)</span>}
        <p>{count === 0 ? "すべて読みました" : "確認してください"}</p>
    </div>
  )
}
