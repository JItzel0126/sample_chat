// src/pages/ChatRoom/ChatRoom.jsx

import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import ChatHeader from '../../components/Header/ChatHeader'
import MessageBubble from "../../components/MessageBubble/MessageBubble"
import doorImage from '../../assets/textapo-door.png'
import ChoiceButton from '../../components/ChoiceButton/ChoiceButton'

export default function ChatRoom (){
  const navigate = useNavigate()
       // state (useState 필요)    
  const [choices, setChoices] = useState([
        "지금 나가고 있어!",
        "무슨 일인데?",
        "뭔 헛소리야? 잠이나 더 자ㅋ"
        ])
    return(
      <div className="bg-lime-100 min-h-screen flex-col justify-center items-center p-2">
        <ChatHeader />

        <div className="p-2 flex justify-between">
          <button
          onClick={() => navigate('/home')}
          className="w-10 h-10 mt-2
          cursor-pointer hover:bg-zinc-100 transition">🔙</button>
          <h1 className="text-2xl font-extrabold text-gray-800">쑤횬</h1>
          <p className="text-1xl font-extrabbold text-gray-700 font-bold">접속중<br/>지금</p>
        </div>
        <div className="w-100 border-b-2 border-solid border-zinc-400 m-2"></div>

        {/*쑤횬 메시지*/}
        <MessageBubble 
          sender="쑤횬"
          messages={[
            <strong>야 지금 뭐해?</strong>,
            "너 지금 어디야!?",
            "지금 밖에 난리 났어!!",
        ]}
          time="1시간 전"
        />

        {/* 내 응답 */}
        <MessageBubble
          sender="나"
          isMe={true}
          messages={[
            "어... 잤는데?",
            "뭔 일 있음?",
        ]}
          time="5분 전"
      />
        {/* 쑤횬 추가 대사 */}
        <MessageBubble
          sender="쑤횬"
          messages={[
            "사진 봐봐!!",
            "진짜야!",
        ]}
          time="1분 전"
      />

        {/* 쑤횬 이미지 추가 */}
        <MessageBubble
          sender="쑤횬"
          messages={[
            "나와! 빨리!"]}
          doorImage={doorImage}
          time="지금"
      />

 



        {/* 🧭 고정된 선택지 영역 */}
        <div className="sticky bottom-0 bg-lime-100 px-4 py-2 border-t">
        { <ChoiceButton 
              choices={choices}
              onSelect={(selected) => {
              console.log("선택된 선택지:", selected)
         // TODO: 선택에 따라 다음 메시지 등 처리
              }}
            /> }
        </div>
      </div>
    )
}

