import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import CountryContextProvider from './components/context/CountryContextProvider'

function layout() {
  return (
<CountryContextProvider>
   <Header/>
   <Outlet/>
   <Footer/>
   </CountryContextProvider>  )
}

export default layout
