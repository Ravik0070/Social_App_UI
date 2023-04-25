import React from 'react'
import './rightbar.css'
import {Users} from '../../dummyData'
import Online from '../online/Online'

const Rightbar = ({profile}) => {
  const HomeRightBar = () =>{
    return( 
    <>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText"><b>Ryam</b> and<b> 2 other friends </b>  have birthday today.</span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user)=>( <Online user={user} key={user.id}/>))}
        </ul>
    </>
    )
  }

  const ProfileRightBar = () =>{
    return(
      <>
        <h4 className="rightbarTitleForProfile">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Delhi</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Meerut</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitleForProfile">User Friend</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="/assets/profile/1.jpeg" alt="" className="rightbarFollowingImg"/>
            <span className="rightbarFollowingName">john carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/profile/2.jpeg" alt="" className="rightbarFollowingImg"/>
            <span className="rightbarFollowingName">john carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/profile/3.jpeg" alt="" className="rightbarFollowingImg"/>
            <span className="rightbarFollowingName">john carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/profile/4.jpeg" alt="" className="rightbarFollowingImg"/>
            <span className="rightbarFollowingName">john carter</span>
          </div>
        </div>
        
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile?<ProfileRightBar/>:<HomeRightBar/>}
      </div>
    </div>
  )
}

export default Rightbar
