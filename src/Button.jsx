import React from 'react'


const Button = ({menuItems}) => {
  return (
    // <div>buttons</div>
    <div className='d-flex justify-content-center mb-5'>
          {
            menuItems.map(val =>(
                <button className='btn-dark text-white p-1 px-2 mx-5 btn fw-bold'>
                    {val}
                </button>
            ))
          }
          <button className='btn-dark text-white p-1 px-2 mx-5 btn fw-bold'>
                    All
                </button>
    </div>
  )
}

export default Button
