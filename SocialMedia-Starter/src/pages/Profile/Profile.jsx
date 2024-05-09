import React from 'react'
import './Profile.css'
import ProfileLeft from '../../component/ProfileLeft/ProfileLeft'
import ProfileCard from '../../component/ProfileCard/ProfileCard'
import PostSide from '../../component/postside/Postside'
import RightSide from '../../component/rightside/Rightside'
const Profile = () => {
  return (
   <div className="Profile">
    <ProfileLeft/>
    <div className="Profile-center">
      <ProfileCard/>
      <PostSide/>
    </div>
    <RightSide/>
   </div>
  )
}

export default Profile