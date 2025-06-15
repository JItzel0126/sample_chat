// src/components/FriendCard/TutorialCard.jsx
import React from 'react'
import logo from '../../assets/papaya-logo-cc.png'
import { useNavigate } from 'react-router-dom'

export default function TutorialCard() {
  const navigate = useNavigate()
  return (
    <div 
      onClick={() => navigate('/chatroom')}
      className="bg-white shadow-md rounded-lg p-4 flex flex-col
      gap-1 w-[98%] mx-auto my-2
      cursor-pointer hover:bg-gray-50 transition">
      <div className="flex justify-between items-center">     
        <h2 className="text-lg font-semibold text-gray-800"><img src={logo} className="w-16 h-16 rounded-full mr-3" />쑤횬</h2>
        <span className="text-xs text-white bg-red-500 px-2 py-0.5 rounded-full">NEW</span>
      </div>
      <p className="text-sm text-gray-600 flex justify-between">친한 친구 · 위치 불명
      <span className="text-sm text-gray-500 mt-1 truncate">야 지금 뭐해?</span></p>
    </div>
  )
}