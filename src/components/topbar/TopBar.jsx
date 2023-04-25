import React from 'react'
import './topbar.css'
import {Chat, Person, Search,Notifications} from '@mui/icons-material'
const TopBar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
          <span className="logo">RavSocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon"/>
          <input className="searchInput" placeholder="Search for friends, post or video"/>
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications/>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/profile/1.jpeg" alt="" className="topbarImage" />
      </div>
    </div>
  )
}

export default TopBar
