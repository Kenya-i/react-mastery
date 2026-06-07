import React, { useEffect } from 'react'

export const DocumentKeyListener = () => {
  useEffect(() => {
    const handleKeyDown = (e) => {
        console.log("キーが押されました。:" , e.key);
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
        document.removeEventListener("keydown", handleKeyDown);
        console.log("documentのkeydownリスナーを解除しました")
    };
  }, []);

  return (
    <div>
        DocumentKeyListener
    </div>
  )
}
