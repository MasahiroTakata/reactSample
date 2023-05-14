import { CssModules } from "./components/CssModules";

const App = () => {
  // ボタンを押した時に実行する関数を定義
  // const onClickButton = () => {
  //   alert("テスト");
  // };
  // const contentPinkStyle = {
  //   color: "pink",
  //   fontSize: "20px",
  // };
  // cssオブジェクト
  // const contentPinkStyle = {
  //   color: "pink",
  //   fontSize: "20px"
  // };
  CssModules.render(<APP />, document.getElementById("root"));
};
