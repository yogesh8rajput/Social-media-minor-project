import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'

const Auth = () => {
  return (
   <div className="Auth"> 
   <div className="a-left">
    <img src={Logo} alt="" />
    <div className="webname">
        <h1>PalPal Media</h1>
        <h6>Explore the ideas throughout the world</h6>
    </div>
   <>
   <Signup/>
   </>
   </div>
   <div>
    <form action="" className='inform'>
    <div>
                    <input type="text" className="infoInput" 
                    name="username" placeholder="UserName"/>

                </div>
                <div>
                    <input type="text" className="infoInput" 
                    name="password" placeholder="Password"/>
                    <input type="text" className="infoInput" 
                    name="confirmpassword" placeholder="Confirm Password"/>
          <div>

          <span style={{fontSize:'12px'}}> Don't have an account</span>

      
                    
                </div>
                <button className='button infoButton' type='submit'>Login </button>
   </div>
    </form>
   </div>

   </div>
  )
}
function Signup(){
    return(
        <div className="a-right">
            <form  className="infoForm authForm">

                <h3>Signup wa!!!</h3>
                <div>
                    <input type="text" 
                    placeholder="First Name"
                    className="InfoInput"
                    name="firstname"/>
                     <input type="text" 
                    placeholder="Last Name"
                    className="InfoInput"
                    name="lastname"/>
                </div>
                <div>
                    <input type="text" className="infoInput" 
                    name="username" placeholder="UserName"/>

                </div>
                <div>
                    <input type="text" className="infoInput" 
                    name="password" placeholder="Password"/>
                    <input type="text" className="infoInput" 
                    name="confirmpassword" placeholder="Confirm Password"/>

                    
                </div>
                <div>
                    <span style={{fontSize:'12px'}}>Already have an accoumt LOGIN!</span>
                </div>
                <button className='button infoButton' type='submit'>Signup </button>
            </form>
        </div>
    );
};



export default Auth