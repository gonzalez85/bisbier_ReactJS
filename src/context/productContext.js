import { createContext } from 'react'

const ProductContext = createContext();

const ProductProvider = ({children}) => {

  const data = {}

  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  )
};

export { ProductProvider };
export default ProductContext;