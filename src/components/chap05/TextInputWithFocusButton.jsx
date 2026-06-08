import React, { useRef } from 'react'

export const TextInputWithFocusButton = () => {
  const inputEl = useRef(null);

  const onButtononClick = () => {
    if (inputEl.current === null) return;
    inputEl.current.focus();
  }
  return (
    <div>
        <input ref={inputEl} type="text" />
        <button onClick={onButtononClick}>
            入力欄にフォーカスを当てる
        </button>
    </div>
  )
}
