import React from 'react'

export const UserGreeting = () => {
    const name = "taro";
    const today = new Date().toLocaleDateString();

    const getWeather = () => {
        return "晴れ";
    }

  return (
    <div>
        <h1>こんにちは、{name}さん</h1>
        <p>今日は{today}です。</p>
        <p>今日の天気は、{getWeather()}です。</p>
        <p>1+2の罫線結果は、{1 +2}です</p>
    </div>
  );
}
