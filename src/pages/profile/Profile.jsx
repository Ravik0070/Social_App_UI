import React from 'react'
import './profile.css'
import TopBar from '../../components/topbar/TopBar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'

const profile = () => {
  return (
    <>
      <TopBar/>
      <div className="profile">
        <Sidebar/>  
        <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img src="/assets/post/3.jpeg" alt="" className="profileCoverImg" />
                <img src="/assets/profile/7.jpeg" alt="" className="profileUserImg" />
              </div>
              <div className="profileInfo">
                <h4 className="profileInfoName">Ravikant </h4>
                <span className="profileInfoDesc">Ravikant is my name</span>
              </div>
            </div>
            <div className="profileRightBottom">
              <Feed/>
              <Rightbar profile/>
            </div>
        </div>
       
        
      </div>
    </>
  )
}

export default profile