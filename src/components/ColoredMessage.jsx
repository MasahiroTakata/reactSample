export const ColoredMessage = (props) => {
  const { color, children } = props; // colorとchildrenを「props.」を使わずに宣言できる
  const contentStyle = {
    color: color, // 「props.」の省略ができるが、今のようにプロパティ名と設定値が一緒の場合は・・・
    color, // 値が同じ場合は、これも省略が可能
    fontSize: "20px",
  };

  return <p style={contentStyle}>{children}</p>;
};
