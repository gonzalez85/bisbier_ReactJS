import axios from 'axios';
import { useEffect, useState, createContext } from 'react';

const ProductsContext = createContext();

const ProductsProvider = ({children}) => {
  
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    axios("../data/products.json").then((res) =>
      setProducts(res.data)
    );
  }, []);

  return (
    <ProductsContext.Provider value={{products, setProducts}}>
      {children}
    </ProductsContext.Provider>
  )
};

export { ProductsProvider };
export default ProductsContext;