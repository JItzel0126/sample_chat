// src/pages/HomeScreen/HomeScreen.jsx
import React from 'react'
import HomeHeader from './HomeHeader.jsx'
import UserProfile from './UserProfile.jsx'
import FriendList from './FriendList.jsx'
// import NavigationBar from './NavigationBar.jsx'

export default function HomeScreen() {
  return (
    <div className="min-h-screen bg-lime-100 flex flex-col">
      <HomeHeader />
       <div className="w-screen h-screen mt-5">
        <UserProfile />
        <div className="w-screen m-5 text-gray-800 text-2xl font-extrabold ">친구</div>
        <FriendList />
      </div>
    </div>
  )
}