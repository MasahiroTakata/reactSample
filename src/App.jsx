import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  // ボタンを押した時に実行する関数を定義
  const onClickButton = () => {
    alert("テスト");
  };
  // cssオブジェクト
  // const contentPinkStyle = {
  //   color: "pink",
  //   fontSize: "20px"
  // };
  return (
    <div>
      {console.log("TEST")}
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColoredMessage color="blue" message="お元気ですか？" />
      <ColoredMessage color="pink" message="元気です！" />
      <button onClick={onClickButton}>ボタン</button>
    </div>
  );
};

