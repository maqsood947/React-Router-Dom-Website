import React, { useState, useEffect } from 'react';
import cContext from './Context';


function CountryContextProvider({children}) {
  
  const[country, setCountry]= useState([])
  const[loader, setLoader] = useState(true)

  async function fetchCountry() {
      try {
      const response = await fetch(`https://restcountries.com/v3.1/all?`)
      const data = await response.json()
      // const usableData =  await data.slice(100)
      setCountry(data)
      // console.log(data)
      setLoader(false)
      } catch (e) {
          console.log("error is : " + e)
          
      }

  }

  useEffect(() => {
      fetchCountry()
    },[]);
    return (
      <cContext.Provider value={{ country, loader }}>
        {children}
      </cContext.Provider>
    );
  }
  
  export default CountryContextProvider;
