import Colors from "../Colors";
import "./style.scss";
function Cart({ img }) {
  return (
    <div className="cart">
      <img src={img} alt={img} />
      <h3 className="cart__title">Table</h3>

      <div className="cart__price">330$</div>
      <div className="size">
        <div className="size__item">S</div>
        <div className="size__item">M</div>
        <div className="size__item">L</div>
      </div>
      <div className="cart__colors">
        <Colors />
      </div>
      <button className="cart__button">add to cart</button>
    </div>
  );
}

export default Cart;
