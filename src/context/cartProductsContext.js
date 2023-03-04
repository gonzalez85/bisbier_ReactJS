import { useState, createContext } from 'react';

const CartProductsContext = createContext();

const CartProductsProvider = ({ children }) => {
  
  const [cartProducts, setCartProducts] = useState([]);

  const cartAdd = (productToAdd) => {

    let newCartProducts = [...cartProducts]
    const productInCart = newCartProducts.find((productInCart) => productInCart.id === productToAdd.id)

    if (productInCart) {
    } else {
      newCartProducts = [...cartProducts, productToAdd];
      setCartProducts(newCartProducts)
    }
  }

  const cartRemove = (productToRemove) => {
    
    let newCartProducts = [...cartProducts].filter(cartProduct => cartProduct.id !== productToRemove.id)
    
    setCartProducts(newCartProducts)
  }

  return (
    <CartProductsContext.Provider value={{ cartProducts, setCartProducts, cartAdd, cartRemove }}>
      {children}
    </CartProductsContext.Provider>
  )
};

export { CartProductsProvider };
export default CartProductsContext;