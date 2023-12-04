import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './Data';
import Card from './Card'
import Button from './Button';
// import _Data__WEBPACK_IMPORTED_MODULE_2__ from 'path-to-your-data-file';




const App = () => {
  
  const[item, setItem] =useState(Data)
  const menuItems = [...new Set(Data.map((val) => val.category))]

  return(
    <div className='container-fluid'>
    <div className='row'>
    <h1 className='text-center col-12 fw-bold mt-3 mb-5'>Food Filter App</h1>

    <Button   menuItems = {menuItems}/>
     <Card item={item}/>


    </div>


    
    </div>

    
  )


}

export default App;
