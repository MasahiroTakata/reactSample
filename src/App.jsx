import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  // ボタンを押した時に実行する関数を定義
  const onClickButton = () => {
    alert("テスト");
  };
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
    </div>
  );
};
