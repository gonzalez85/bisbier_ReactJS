import { useState, createContext } from 'react';

const CartProductsContext = createContext();

const CartProductsProvider = ({ children }) => {

  // const productsInCart = [
  //   {
  //     id: 0,
  //     title: "Blonde Ale",
  //     category: "Cervezas",
  //     description: "Una cerveza americana fácil de tomar, balanceada hacia la malta.",
  //     fullDescription: "Una cerveza americana fácil de tomar, balanceada hacia la malta. Con 4.7% de alcohol y 18 IBU's de amargor.",
  //     price: 150,
  //     image: "blonde",
  //     quantity: 2,
  //     stock: 20
  //   },
  //   {
  //     id: 2,
  //     title: "Amber Ale",
  //     category: "Cervezas",
  //     description: "Una cerveza fácil de tomar, con un sabor dulce debido a las maltas crystal.",
  //     fullDescription: "Una cerveza fácil de tomar, con un sabor dulce debido a las maltas crystal. Con 4.4% de alcohol y 25 IBU's de amargor.",
  //     price: 150,
  //     image: "amber",
  //     quantity: 1,
  //     stock: 20
  //   },
  // ];

  const [cartProducts, setCartProducts] = useState([]);

  const cartAdd = (productToAdd) => {
    
    let newCartProducts = [...cartProducts]

    const productInCart = newCartProducts.find((productInCart) => productInCart.id === productToAdd.id)

    if (productInCart) {
      productInCart.quantity += productToAdd.quantity
    } else {
      newCartProducts = [...cartProducts, productToAdd];
    }
    setCartProducts(newCartProducts)
  }

  const cartRemove = (productToRemove) => {
    
    let newCartProducts = [...cartProducts].filter(cartProduct => cartProduct.id !== productToRemove.id)
    
    setCartProducts(newCartProducts)
  }

  const increment = (quantity, counter) => {
    // const newCounters = {...counters}
    console.log(quantity, counter);
  }
  
  const decrement = () => {
    
  }

  // const [counter, setCounter] = useState(1);

  // const increment = (counter) => counter < 99 ? setCounter(counter + 1) : counter;
  
  // const increment2 = (productQuantity) => {
    
    
  // };

  // const decrement = () => counter > 1 ? setCounter(counter - 1) : counter;

  return (
    <CartProductsContext.Provider value={{ cartProducts, setCartProducts, cartAdd, cartRemove, increment, decrement }}>
      {children}
    </CartProductsContext.Provider>
  )
};

export { CartProductsProvider };
export default CartProductsContext;