import { useState, createContext } from 'react';

const CartProductsContext = createContext();

const CartProductsProvider = ({ children }) => {

  const productsInCart = [
    { id: 0, title: "Blonde Ale", price: 150, quantity:2 },
    { id: 2, title: "Amber Ale", price: 150, quantity:1 },
  ];

  const [cartProducts, setCartProducts] = useState(productsInCart);

  // useEffect(() => {
  //     setCartProducts(productsInCart)
  // }, []);
    
  const cartAdd = (productToAdd) => {

    // const productIsInCart = true
    
    const productIsInCart = cartProducts.find((e) => {
      return e.id === productToAdd.id
    });

    if (productIsInCart) {
      console.log("Actualizar: ", cartProducts);
      const newCartProducts = [...cartProducts]
      
      const productToUpdate = newCartProducts.find((e) => {
        return e.id === productToAdd.id
      });
      productToUpdate.quantity = productToUpdate.quantity + productToAdd.quantity
      console.log(productToUpdate);
      
      
      // newCartProducts[productToAdd]
      setCartProducts(newCartProducts)
    } else {
      console.log("Agregar");
      const newCartProducts = [...cartProducts, productToAdd];
      setCartProducts(newCartProducts);
    }

    const newCartProducts = cartProducts.map(cartProduct => {
      console.log(productToAdd);
      console.log(cartProduct);
      // console.log("Hola");

      // const newCartProducts = [...cartProducts, productToAdd];
      // setCartProducts(newCartProducts);
    })

    // const newCartProducts = cartProducts.map(cartProduct => {
    //   console.log(cartProduct.id,productToAdd.id);
    //   if (cartProduct.id == productToAdd.id) {
    //     // console.log("verdadero");
    //     const newCartProducts = [...cartProducts];
    //     setCartProducts(newCartProducts);

    //   }else{
    //     // console.log("falso");
    //     const newCartProducts = [...cartProducts, productToAdd]
    //     setCartProducts(newCartProducts);
    //   }
    // })



    // const newCartProducts = [...cartProducts, productToAdd];

    // setCartProducts(newCartProducts);
  }

  const [counter, setCounter] = useState(1);

  const increment = (counter) => counter < 99 ? setCounter(counter + 1) : counter;
  
  const increment2 = (productQuantity) => {
    
    console.log(productQuantity);
    console.log(productsInCart[0].quantity, productQuantity);
    
  };

  const decrement = () => counter > 1 ? setCounter(counter - 1) : counter;

  return (
    <CartProductsContext.Provider value={{cartProducts, setCartProducts, counter, setCounter, increment, increment2, decrement, cartAdd}}>
      {children}
    </CartProductsContext.Provider>
  )
};

export { CartProductsProvider };
export default CartProductsContext;