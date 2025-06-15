// src/pages/ChatRoom/ChatRoom.jsx

import React from "react"
import { useNavigate } from 'react-router-dom'
import ChatHeader from '../../components/Header/ChatHeader'
import MessageBubble from "../../components/MessageBubble/MessageBubble"

export default function ChatRoom (){
  const navigate = useNavigate()
    return(
      <div className="bg-lime-100 h-screen flex-col justify-center items-center p-2">
        <ChatHeader />
        <div className="p-2 flex justify-between">
          <button
          onClick={() => navigate('/home')}
          className="w-10 h-10 mt-2
          cursor-pointer hover:bg-zinc-100 transition">🔙</button>
          <h1 className="text-2xl font-extrabold text-gray-800">쑤횬</h1>
          <p className="text-1xl font-extrabbold text-gray-700">마지막 접속<br/>30분 전</p>
        </div>
        <div className="w-100 border-b-2 border-solid border-zinc-400 m-2"></div>
        <MessageBubble />
        </div>
    )
}

