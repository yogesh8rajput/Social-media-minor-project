import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import './Profileside.css';
import FollowersCarda from '../FollowersCard/FollowersCarda';
const Profileside = () => {
  return (
   <div className="ProfilSide">
   <LogoSearch/>
   <ProfileCard/>
   <FollowersCarda/>
   </div>
  )
}

export default Profileside