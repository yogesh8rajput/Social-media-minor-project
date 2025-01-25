// import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
import React, { useState } from "react";

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
const Signup = () => {
    const [user, setUser] = useState([
      {
        firstname: "",
        lastname:"",
        username: "",
       password: "",
       confirmpassword:"",
      },
    ]);
  
    let Nme, Val;
    const getUserData = (e) => {
      Nme = e.target.name;
      Val = e.target.value;
      setUser({ ...user, [Nme]: Val });
      console.log(Val)
    };
  
    const postDataonFirebase = async (e) => {
      e.preventDefault();
      const resp = await fetch(
        "https://contact-313fe-default-rtdb.firebaseio.com/palpal.json",
        {
          method: "POST",
          header: {"Content-Type" : "application/json"},
          body: JSON.stringify({
            firstname: user.firstname,
            lastname:user.lastname,
            username: user.username,
           password: user.password,
           confirmpassword:user.confirmpassword,
          }), 
        }
      );
      
      if (resp) {
        setUser({
            firstname: "",
            lastname:"",
            username: "",
           password: "",
           confirmpassword:"",
        });
        alert("Thankyou So much");
      }
      
    };
 return(
        <div className="a-right">
            <form  className="infoForm authForm" action="" onSubmit={postDataonFirebase}>

                <h3>Signup wa!!!</h3>
                <div>
                    <input type="text" 
                    placeholder="First Name"
                    className="InfoInput"
                    name="firstname"
                    value={user.firstname}
                    onChange={getUserData}
                    />

                    </div>
                    <div>
                     <input type="text" 
                    placeholder="Last Name"
                    className="InfoInput"
                    name="lastname"
                    value={user.lastname}
                    onChange={getUserData}
                    />
                </div>
                <div>
                    <input type="text" className="infoInput" 
                    name="username" placeholder="UserName"  value={user.username} onChange={getUserData}/>

                </div>
                <div>
                    <input type="text" className="infoInput" 
                    name="password" placeholder="Password"  value={user.password} onChange={getUserData}/>


</div>
                    <div>
                    <input type="text" className="infoInput" 
                    name="confirmpassword" placeholder="Confirm Password"  value={user.confirmpassword} onChange={getUserData}/>

                    
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