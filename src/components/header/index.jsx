import './style.scss';
import cart from '../../assets/img/cart.png';

function Header({avatar}) {
    return (
        <header className="header">
            <div className="header__wrap">
                <div className="logo">
                    LOGO
                </div>
                <div className="header__nav">
                    <div className="header__ava">
                        {avatar ? <img src={avatar} alt="avatar"/> : <div className="header__def">N</div>}
                    </div>
                    <div className="header__cart">
                        <img src={cart} alt="cart"/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;