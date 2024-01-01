import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const menuList = [
    { title: "Shop", link: "/" },
    { title: "Mens", link: "/mens" },
    { title: "Womens", link: "/womens" },
    { title: "Kids", link: "/kids" },
  ];
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <Link to="/">
        <div className="nav-logo">
          <img src={logo} alt="LOGO" />
          <p>SHOPPER</p>
        </div>
      </Link>
      <ul className="nav-menu">
        {menuList?.map((list) => (
          <li
            key={list.title}
            onClick={() => setMenu(list.title.toLowerCase())}
          >
            <Link to={list.link}>{list.title}</Link>
            {list.title.toLowerCase() === menu && <hr />}
          </li>
        ))}
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="CART" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems() || 0}</div>
      </div>
    </div>
  );
};

export default Navbar;
