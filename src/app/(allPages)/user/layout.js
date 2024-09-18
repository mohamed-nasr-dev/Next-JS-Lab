import Sidebar from '@/Components/Sidebar/Sidebar'
import React from 'react'
//make different layouts
export default function layout({ children}) {
  return (
    <div className='container-fluid'>
    <div className='row'>
    <div className='col-md-2'><Sidebar/></div>
    <div className='col-md-10'> {children}</div>



    </div>

   
    </div>
  )
}
