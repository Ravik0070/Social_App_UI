import React from 'react'
import TopBar from '../../components/topbar/TopBar'
import './home.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'

const Home = () => {
  return (
    <>
      <TopBar/>
      <div className="homeContainer">
        <Sidebar/>  
        <Feed/>
        <Rightbar/>
      </div>
    </>
  )
}

export default Home