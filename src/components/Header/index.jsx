
import './style.css';

import logo from '../../assets/kol.png'

function Header() {
    return (
         <header className="header cont">
      <img src={logo}alt="" />

      <nav className="nav">
        <p>Home</p>
        <p>Feature</p>
        <p>About</p>
        <p>Product</p>
        <button className="shop-btn">Shop Now</button>
      </nav>
    </header>
    );
}

export default Header;