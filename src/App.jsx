import { ColoredMessage } from "./components/ColoredMessage";
import { useState } from "react";
import { useEffect } from "react";

export const App = () => {
  // Stateの定義
  const [num, setNum] = useState(0);
  // ボタンを押した時に実行する関数を定義
  const onClickButton = () => {
    //setNum(num + 1);
    setNum((prev) => prev + 1); // この使い方でもイケる
  };
  // useEffect(() => {
  //   // numの値が変わったときに呼び出される
  //   alert(num);
  // }, [num]);
  // const contentPinkStyle = {
  //   color: "pink",
  //   fontSize: "20px",
  // };
  // cssオブジェクト
  // const contentPinkStyle = {
  //   color: "pink",
  //   fontSize: "20px"
  // };
  return (
    <div>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です！</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </div>
  );
};
