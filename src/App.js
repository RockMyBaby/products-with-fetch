import { useMemo, useState } from "react";
import "./App.css";
import { Products } from "./component/Products";
import Cart from "./component/Cart";
import {storeContext} from "./context/store";

function App() {
  const [product, setProduct] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [showCart, setShowCart] = useState(false);

  const contextValue = useMemo(
    () => ({
      product,
      setProduct,
      totalPrice,
      setTotalPrice,
      totalItems,
      setTotalItems,
    }),
    [ product,
      setProduct,
      totalPrice,
      setTotalPrice,
      totalItems,
      setTotalItems,]
  );

  const handleShowCart = () => {
    setShowCart(!showCart);
  }
console.log(showCart)
  return (
    <div>
    <storeContext.Provider value={contextValue}>
      <div className="App">
        <header className="App-header">
          <div
            style={{
              display: "flex",
              position: "fixed",
              justifyContent: "space-between",
              marginBottom: "12px",
              width: "100%",
              height: "3pc",
              alignItems: "center",
              backgroundColor: "lightgrey",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <h2
              style={{
                color: "GrayText",
                display:"flex",
                width: "80pc",
                marginLeft: "45%",
                marginRight: "0%",
              }}
            >
              Products
            </h2>
            <button style={{ marginRight: "10pc" }} onClick={handleShowCart}>Cart</button>
          </div>
          <div style={{ marginTop: "6pc" }}>
            {showCart ? <Cart /> : <Products />}
          </div>
        </header>
      </div>
    </storeContext.Provider>
    </div>
  );
}

export default App;
