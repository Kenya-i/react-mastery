import React from 'react'

export const Message = ({display}) => {
    if (display) {
        return (
            <div className="card">
                <h3>お知らせ</h3>
                <p>...</p>
                <ul>
                    <li>...</li>
                    <li>...</li>
                </ul>
            </div>
        )
    }
  return (
    <div className="card muted">
                <h3>メッセージは非表示です</h3>
                <p>...</p>
                <p>...</p>
    </div>
  )
//   return (
//     <div className={`card ${!display ? "muted" : ""}`}>
//         {display ? (
//             <>
//                 <h3>お知らせ</h3>
//                 <p>...</p>
//                 <ul>
//                     <li>...</li>
//                     <li>...</li>
//                 </ul>
//             </>
//         ) : (
//             <>
//                 <h3>メッセージは非表示です</h3>
//                 <p>...</p>
//                 <p>...</p>
//             </>
//         )}
//     </div>
//   )
}
