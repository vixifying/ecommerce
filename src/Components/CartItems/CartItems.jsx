import { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  return (
    <div className="cartItems">
      <div className="cartItems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      <div>
        {all_product?.map((el) => {
          if (cartItems[el.id] > 0) {
            return (
              <div key={el.id}>
                <div
                  className="cartItems-format cartItems-format-main"
                  key={el.id}
                >
                  <img
                    src={el.image}
                    className="carticon-product-icon"
                    alt=""
                  />
                  <p>{el.name}</p>
                  <p>${el.new_price}</p>
                  <button className="cartitems-quantity">
                    {cartItems[el.id]}
                  </button>
                  <p>${el.new_price * cartItems[el.id]}</p>
                  <img
                    className="cartItems-remove-icon"
                    src={remove_icon}
                    onClick={() => removeFromCart(el.id)}
                    alt=""
                  />
                </div>
              </div>
            );
          } else <h1>No Items in cart</h1>;
        })}

        <div className="cartItems-down">
          <div>
            <div className="cartItems-total">
              <h1>Cart Total </h1>
              <div className="cartItems-total-item">
                <p>Subtotal: </p>
                <p>${getTotalCartAmount()}</p>
              </div>
            </div>
            <hr />
            <div className="cartItems-total-item">
              <p>Shipping Free:</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartItems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>{" "}
          <div className="cartItems-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartItems-promobox">
              <input type="text" placeholder="Promo Code" />
              <button type="submit" className="btn-sec">
                Submit
              </button>
            </div>{" "}
            <button className="btn-main checkout">Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
