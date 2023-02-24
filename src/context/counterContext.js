import {useState, createContext } from 'react';

const CountersContext = createContext();

const CountersProvider = ({children}) => {
	
  const [counters, setCounters] = useState({
		counter0:2,
		counter1:1
	});
  
  const increment = (counter, id) => {
		console.log(counter, id);

		const newCounters ={
			...counters,
		}

		console.log(counters, newCounters);

		newCounters[id] = counter + 1
		console.log(counters, newCounters);

		setCounters(newCounters)
		console.log(counters, newCounters);

		// counter < 99 ? setCounters(counter + 1) : counter;
	}
  
  const decrement = () => counters > 1 ? setCounters(counters - 1) : counters;

  return (
    <CountersContext.Provider value={{counters, setCounters, increment, decrement}}>
      {children}
    </CountersContext.Provider>
  )
};

export { CountersProvider };
export default CountersContext;