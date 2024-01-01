import React from "react";
import "./RelatedProducts.css";
import data_product from "../Assets/data";
import Item from "../Item/Item";

const RelatedProducts = () => {
  return (
    <div className="related-products">
      <h1>Related Products</h1>
      <hr />
      <div className="related-products-item">
        {data_product.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </div>{" "}
    </div>
  );
};

export default RelatedProducts;
