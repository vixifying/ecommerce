import { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const all_product = useContext(ShopContext);
  let items = all_product.all_product.filter(
    (item) => item.category === props.category && item
  );
  return (
    <div className="shop-category">
      <img src={props?.banner} className="shopcategory-banner" alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {items?.map((el) => (
          <Item key={el.id} item={el} />
        ))}
      </div>
      <div className="btn-main center">Explore More</div>
    </div>
  );
};

export default ShopCategory;
