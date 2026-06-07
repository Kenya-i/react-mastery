import React, { useState } from 'react'
import { DocumentKeyListener } from './DocumentKeyListener';

export const ToggleDocumentKeyListener = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
        <button onClick={() => setShow(!show)}>
            {show ? "コンポーネントを非表示" : "コンポーネントを表示"}
        </button>
        {show && <DocumentKeyListener />}
    </div>
  )
}
