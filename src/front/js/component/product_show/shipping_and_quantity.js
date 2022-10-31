import React, { useState } from "react";
import "../../../styles/product_show/shipping_and_quantity.css";

///// TODO ADD CONDITIONAL HIDE TO MESSAGE TO PICK SIZE IN BUTTONS

const ShippingAndQuantity = ({}) => {
  const [shippingMethod, setShippingMethod] = useState(); //0 for store pickup, 1 for delivery
  const [quantity, setQuantity] = useState(1);

  const updateShippingMethod = (e) => setShippingMethod(e.target.value);
  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="shipping-quantity-container">
      <div className="quantity-container">
        <div className="hide-in-web-view">
          <strong>Select Quantity</strong>
        </div>
        <div className="quantity-counter">
          <button onClick={decrementQuantity}>-</button>
          <div>{quantity}</div>
          <button onClick={incrementQuantity}>+</button>
        </div>
      </div>

      <div className="shipping-radio" onChange={() => updateShippingMethod()}>
        <label>
          <input type="radio" name="shippingMethod" value="0" />
          <div>
            <h5>Pickup In-Store</h5>
            <div className="">Select item to see if item is in stock</div>
          </div>
        </label>
        <label>
          <input type="radio" name="shippingMethod" value="1" />
          <div>
            <h5>Ship</h5>
            <div>Select item to see if item is in stock</div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default ShippingAndQuantity;
