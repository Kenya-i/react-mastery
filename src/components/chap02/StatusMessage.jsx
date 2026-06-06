import React from 'react'

const views = {
    loading: <p>読み込み中...</p>,
    success: <p>完了しました...</p>,
    error: <p>エラーが発生しました</p>
}
export const StatusMessage = ({status}) => {
  return (
    <div>
        {/* {status === "loading" ? (
            <p>読み込み中...</p>
        ) : status === "success" ? (
            <p>完了しました...</p>
        ) : (
            <p>エラーが発生しました</p>
        )} */}
        {views[status]}
    </div>
  )
}
