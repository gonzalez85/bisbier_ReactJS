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
  
  const productToAdd = { id: 14, title: "Blondi Ale", price: 180, quantity:2 }
  const cartAdd = (productToAdd) => {
    const newCartProduct = [...cartProducts, productToAdd];
    setCartProducts(newCartProduct);
  }

  const [counter, setCounter] = useState(1);

  const increment = (counter) => counter < 99 ? setCounter(counter + 1) : counter;
  const increment2 = (counter) => {console.log(productsInCart[0].quantity);
    productsInCart[0].quantity = counter + 1;
  console.log(productsInCart[0].quantity, counter);};

  const decrement = () => counter > 1 ? setCounter(counter - 1) : counter;

  return (
    <CartProductsContext.Provider value={{cartProducts, setCartProducts, counter, setCounter, increment, increment2, decrement, cartAdd, productToAdd}}>
      {children}
    </CartProductsContext.Provider>
  )
};

export { CartProductsProvider };
export default CartProductsContext;