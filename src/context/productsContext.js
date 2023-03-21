import { useEffect, useState, createContext } from 'react';

import { db } from "../firebase/firebaseConfig"
import { collection, query, getDocs, orderBy } from "firebase/firestore";

const ProductsContext = createContext();

const ProductsProvider = ({children}) => {
  
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "products"), orderBy("category"));
      const querySnapshot = await getDocs(q);
      const docs = [];

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
        setProducts(docs);
      });
    };
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  )
};

export { ProductsProvider };
export default ProductsContext;