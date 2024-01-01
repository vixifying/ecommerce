import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productDisplay">
      <div className="productDisplay-left">
        <div className="productDisplay-img-list">
          <img src={product?.image} alt="" />
          <img src={product?.image} alt="" />
          <img src={product?.image} alt="" />
          <img src={product?.image} alt="" />
        </div>
        <div className="productDisplay-img">
          <img className="productDisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productDisplay-right">
        <h1>{product.name}</h1>
        <div className="productDisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(143)</p>
        </div>
        <div className="productDisplay-right-prices">
          <div className="productDisplay-right-prices-old">
            ${product.old_price}
          </div>
          <div className="productDisplay-right-prices-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productDisplay-right-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores nemo
          voluptates voluptas enim quia quae doloremque accusamus magni cumque
          obcaecati dignissimos iusto delectus, cum deserunt? Dicta aliquid
          voluptatibus rem quos. Aperiam voluptates quia officiis reiciendis?
          Possimus error necessitatibus dolores, ipsam laborum aliquam fuga
          aperiam vitae quas laudantium accusamus, ipsum consequatur!
        </div>
        <div className="productDisplay-right-size">
          <h1>Select Size</h1>
          <div className="productDisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button className="btn-main" onClick={() => addToCart(product.id)}>
          Add to Cart
        </button>
        <p className="productDisplay-right-category">
          <span>Category:</span> Women, T-Shirt, Croptop
        </p>
        <p className="productDisplay-right-category">
          <span>Tags:</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
