import React from 'react'
import './Followers.css'
import { Followers } from '../../Data/FollowersData'
const FollowersCarda = () => {
  return (
    <div className="FollowersCard">
       <h3> Who is following you</h3>
       {Followers.map((follower,username)=>{
        return(
            <div className="followers"><div>
                <img src={follower.img} alt="" className='followerImg'/>
                <div className="name">
                    <span>{follower.name}</span>
                    <span>{follower.username}</span>
                </div>
                </div>
                <button className='button -fc'>follow</button>
                </div>
        )
       }
    )}
    </div>
  )
}

export default FollowersCarda