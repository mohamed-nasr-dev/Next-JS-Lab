import Footer from '@/Components/Footer'
import Navbar from '@/Components/Header'
import React from 'react'

export default function layout({children}) {
  return (
    <div>
       <Navbar/>
      
      <div className="my-5">

      {children}
      </div>
      
      
      <Footer/>
      
    </div>
  )
}
