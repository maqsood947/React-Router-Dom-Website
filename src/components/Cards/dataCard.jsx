import React from 'react'
import { NavLink } from 'react-router-dom';
import CountryDetail from '../../screens/CountryDetail/CountryDetail';

const DataCard = ({ myData })=> {
  const getRegionColor = (region) => {
    switch (region) {
      case 'Africa':
        return 'bg-red-500';
      case 'Europe':
        return 'bg-green-500';
      case 'Asia':
        return 'bg-yellow-500 text-black'; // Text black for better contrast
      case 'Americas':
        return 'bg-blue-500';
      case 'Oceania':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500'; // Default color if region is unknown
    }
  };
const population = myData.population.toLocaleString();
const area = myData.area.toLocaleString();
  
  return (    
    <NavLink>
        <div className=" w-48 h-64 hover:w-60  hover:h-80 transition-all duration-300 text-center  bg-gray-300 from-indigo-900 to-blue-700 rounded-xl justify-center items-center gap-1 my-2 py-2 ">
        <h1 className='font-bold text-xl '>{myData?.name?.common}</h1>
        <img className ="rounded-lg mx-auto py-1"  src={myData.flags.png}  height={80} width={80} title={myData.Name} />
        <p> Capital  : {myData.capital}</p>
        <p> Area  : {area}</p>
        <p> Population  : {population}</p>
        <p> Region  :        <span className={`px-2 mx-1 rounded-lg text-white ${getRegionColor(myData.region)}`}>{myData.region}</span>
        </p>
        </div>
        </NavLink>  
  )
}

export default DataCard
