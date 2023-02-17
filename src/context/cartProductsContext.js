import axios from 'axios';
import { useState, createContext, useEffect } from 'react';
const CartProductContext = createContext();

const CartProductProvider = ({children}) => {

  const [cartProducts, setCartProducts] = useState([]);
  
    useEffect(() => {
      axios("../data/products.json").then((res) =>
        setCartProducts(res.data)
      );
    }, []);

  return (
    <CartProductContext.Provider value={{cartProducts, setCartProducts}}>{children}</CartProductContext.Provider>
  )
};

export { CartProductProvider };
export default CartProductContext;