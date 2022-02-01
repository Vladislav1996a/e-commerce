import "./style.scss";
import Cart from "../Cart";
import img from "../../assets/img/sweet.webp";

function Shop() {
  return (
    <div className="shop">
      <Cart img={img} />
      <Cart img={img} />
      <Cart img={img} />
      <Cart img={img} />
    </div>
  );
}

export default Shop;
