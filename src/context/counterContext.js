import axios from "axios";
import React, { useEffect, useState, createContext  } from "react";

const CountersContext = createContext();

const CountersProvider = ({children}) => {

	const [counters, setCounters] = useState({});
  
	useEffect(() => {
    axios("../data/products.json").then((res) =>{
			let countersProducts = {}
			res.data.map(product => countersProducts["counter"+product.id] = product.quantity)
			// res.data.map(product => countersProducts["counterCart"+product.id] = 0)
			setCounters(countersProducts)
		});
  }, []);

	const increment = (counter, id) => {

		const newCounters = {...counters}
		
		newCounters[id] = counter < 10 ? counter + 1 : counter
		setCounters(newCounters)
	}
  
  const decrement = (counter, id) => {
		const newCounters = {...counters}

		newCounters[id] = counter > 1 ? counter - 1 : counter
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