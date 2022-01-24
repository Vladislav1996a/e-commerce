import './style.scss'
function Cart({img}) {
    return (
        <div className="cart">
            <img src={img} alt={img}/>
            <h3 className="cart__title">Table</h3>
            <div className="price">330$</div>
        </div>
    )
}

export default Cart;