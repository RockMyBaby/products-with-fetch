import React from "react";
import { useAppContext } from "./store";
import "./Products.css";
import "./Cart.css";
const Cart = () => {
  const {
    totalPrice,
    totalItems,
    product,
    setProduct,
    setTotalPrice,
    setTotalItems,
  } = useAppContext();
  console.log("ff", product);

  const handleIncrement = (item) => {
    product.forEach((element) => {
      if (element.id === item.id) {
        element.quantity = element.quantity ? element.quantity + 1 : 1;

        setProduct([...product]);

        setTotalItems(totalItems + 1);
        setTotalPrice(totalPrice + item.price);
      }
    });
  };
  const handleDecrement = (item) => {
    product.forEach((element) => {
      if (element.id === item.id && element.quantity > 0) {
        element.quantity = element.quantity ? element.quantity - 1 : 0;
        if (element.quantity === 0) {
          product.splice(product.indexOf(element), 1);
        } else {
          setProduct([...product]);
        }

        setTotalItems(totalItems - 1);
        setTotalPrice(totalPrice - item.price);
      }
    });
  };
  return (
    <div>
      <h2>Your Cart</h2>
      {totalPrice === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <div className="cart-container">
          <ul className="product-list">
            <li>
              <div className="cart-item">
                <div>Item Name</div>
                <div>Quantity</div>
              </div>
            </li>
            {product.map((item) => {
              return (
                <li key={item.id}>
                  <div className="cart-item">
                    {/* <div><img height="100px" width="75px" src={item.images} ></img></div> */}
                    <div>{item.name}</div>
                    <div style={{ display: "flex", gap: 2, alignItems: "center" }}>
                      <button
                        style={{ marginRight: "10px" }}
                        onClick={() => handleDecrement(item)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        min="0"
                        style={{
                          width: "40px",
                        //   height: "30px",
                          textAlign: "center",
                        }}
                        readOnly
                      />
                      <button
                        style={{ marginLeft: "10px" }}
                        onClick={() => handleIncrement(item)}
                      >
                        +
                      </button>
                    </div>
                    {/* <div><button  onClick={()=>handleAddToCart(item)}>Add To Cart</button></div> */}
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="cart-total">
            <h2>Total Items :- {totalItems}</h2>
          </div>
          <div className="cart-total">
            <h2>Total Price :- {totalPrice.toFixed(2)}</h2>
          </div>
          {/* <h2>Total :- {totalPrice.toFixed(2)}</h2> */}
        </div>
      )}
    </div>
  );
};

export default Cart;
