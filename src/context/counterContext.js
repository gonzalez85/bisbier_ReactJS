import React, { useEffect, useState, createContext  } from "react";
import { db } from "../firebase/firebaseConfig"
import { collection, query, getDocs } from "firebase/firestore";


const CountersContext = createContext();

const CountersProvider = ({children}) => {

	const [counters, setCounters] = useState({});
  
	useEffect(() => {

		const getCounters = async () => {

		  const q = query(collection(db, "productos"));
		  const querySnapshot = await getDocs(q);
		  const products = [];
		  let countersProducts = {}

			querySnapshot.forEach((doc) => {
				products.push({ id: doc.id, ...doc.data() });
			});
			products.map(product => ([
				countersProducts["counter"+product.id] = 1, 
				countersProducts["counterCart"+product.id] = 0
			]))
			setCounters(countersProducts);
		};
		getCounters()
	  }, []);

	const increment = (counter, counterId, stock) => {
		const newCounters = {...counters}
		newCounters[counterId] = counter < stock ? counter + 1 : counter
		setCounters(newCounters)
	}
  
  const decrement = (counter, counterId) => {
		const newCounters = {...counters}
		newCounters[counterId] = counter > 1 ? counter - 1 : counter
		setCounters(newCounters)
	}

  return (
    <CountersContext.Provider value={{counters, setCounters, increment, decrement}}>
      {children}
    </CountersContext.Provider>
  )
};

export { CountersProvider };
export default CountersContext;