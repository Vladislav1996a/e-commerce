import "./style.scss";
function Colors() {
  const colors = [
    "#00bbec",
    "#2c6ed5",
    "##ffa037",
    "#ff5337",
    "#a88c77",
    "#393939",
    "#cccccc",
  ];
  return (
    <div className="color">
      {colors &&
        colors.map((item, i) => (
          <div
            key={item + i}
            className="color__item"
            style={{ background: item }}
          ></div>
        ))}
    </div>
  );
}

export default Colors;
