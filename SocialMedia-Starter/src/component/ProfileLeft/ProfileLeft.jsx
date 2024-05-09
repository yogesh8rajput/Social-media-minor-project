import React from 'react'
import './ProfileLeft.css'
import LogoSearch from '../LogoSearch/LogoSearch'
import FollowersCarda from '../FollowersCard/FollowersCarda'
import InfoCard from '../InfoCard/InfoCard'
const ProfileLeft = () => {
  return (
    <div className="ProfileLeft">
        <LogoSearch/>
        <InfoCard/>
        <FollowersCarda/>
    </div>
  )
}

export default ProfileLeft