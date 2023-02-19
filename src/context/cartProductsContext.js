import { useState, useEffect, createContext } from 'react';

const CartProductsContext = createContext();



const CartProductsProvider = ({ children }) => {

  const productsInCart = [
    { id: 0, title: "Blonde Ale", price: 150, quantity:2 },
    { id: 2, title: "Amber Ale", price: 150, quantity:1 },
  ];

  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
      setCartProducts(productsInCart)
  }, []);
 
  return (
    <CartProductsContext.Provider value={{cartProducts, setCartProducts}}>
      {children}
    </CartProductsContext.Provider>
  )
};

export { CartProductsProvider };
export default CartProductsContext;