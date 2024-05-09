import React from 'react'
import "./Home.css"
import Profileside from '../../component/profileside/Profileside'
import Postside from '../../component/postside/Postside'
import Rightside from '../../component/rightside/Rightside'
const Home = () => {
  return (
    <div className="Home">
         <Profileside/>
          <Postside/>
         <Rightside/>
    </div>
   
  )
}

export default Home 