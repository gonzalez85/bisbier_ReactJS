import axios from 'axios';
import { useEffect, useState, createContext } from 'react';
const ProductContext = createContext();

const ProductProvider = ({children}) => {

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    axios("../data/products.json").then((res) =>
      setProducts(res.data)
    );
  }, []);


  return (
    <ProductContext.Provider value={{products, setProducts}}>{children}</ProductContext.Provider>
  )
};

export { ProductProvider };
export default ProductContext;