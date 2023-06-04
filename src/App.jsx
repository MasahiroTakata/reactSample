import { ColoredMessage } from "./components/ColoredMessage";
import { useState } from "react";
import { useEffect } from "react";

// 関数コンポーネントの定義（他ファイルに使ってもらうには「export」の記載が必要）
export const App = () => {
  // Stateの定義（更新関数）
  // numが状態を持った変数、setNumがそれを更新する関数（setNumがどこかで使われる想定）
  // 状態を持った変数（今で言うnum）は、オブジェクトや配列でも管理が可能
  const [num, setNum] = useState(0);
  // ボタンを押した時に実行する関数を定義
  const onClickButton = () => {
    //setNum(num + 1);
    setNum((prev) => prev + 1); // この使い方でもイケる
  };
  return (
    <div>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      {/* colorを引数（props）として渡す。且つ「お元気ですか？」も引数として渡している（children） */}
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です！</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </div>
  );
};
