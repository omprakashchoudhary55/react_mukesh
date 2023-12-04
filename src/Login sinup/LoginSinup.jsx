import React, { useState } from 'react';
import './LoginSinup.css';

const LoginSinup = () => {


  const[action, setAction] = useState("Login")
  return (
    <div className='container'>
    <div className='header'>
      <div className='text'>
            {action}
      </div>
      <div className='underline'></div>
    </div>

    <div className='inputs'>
    {action==="Login"? <div></div> :  <div className='input'>
    <i class="fa-solid fa-user"></i>
      <input type='text' placeholder='Name'/>
    </div>}
   

    <div className='input'>
    <i class="fa-solid fa-envelope"></i>
      <input type='email' placeholder='Email-Id'/>
    </div>

    <div className='input'>
    <i class="fa-solid fa-lock"></i>
      <input type='password' placeholder='Password'/>
    </div>

    </div>
    {action==="Sign Up"? <div></div> : <div className='forget'>Lost password <span>Click Here</span></div> }
   

    <div className='btn'>
          <div className={action === "Login" ? "submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
          <div className={action ==="Sign Up" ? 'submit gray': "submit"} onClick={()=>{setAction("Login")}}>Login</div>
    </div>
      
    </div>
  )
}

export default LoginSinup;
