import React from 'react';
import logo from '../../assets/papaya-logo-cc.png'

export default function MessageBubble({ sender, messages = [], time, isMe, doorImage }){
    return (
     <div className={`flex items-start ${isMe ? 'justify-end' : 'justify-start'} px-1 mt-2 mb-2`}>
      {/* 상대방일 경우만 로고+이름 보여줌 */}
      {!isMe && (
        <div className="flex flex-col items-center mr-2 text-center text-base text-gray-700 font-bold">
        <img src={logo} className="w-10 h-10 rounded-full mb-1" />
      <p>{sender}</p>
    </div>
  )}
      {/* 오른쪽 메시지: isMe일 때만 */}
      {isMe && (<p className='text-center text-base text-gray-700 font-bold'>{sender}</p>)}

      <div className={`max-w-xs m-1 p-3 rounded-lg shadow
        ${isMe ? 'bg-teal-100 text-teal-800' : 'bg-yellow-50 text-yellow-600'}`}>
        {messages.map((msg, idx) => (
          <p key={idx} className="m-1 text-base leading-snug">{msg}</p>
        ))}

        {/* 👇 이미지가 있으면 아래 출력 */}
        {doorImage && (
          <img src={doorImage} alt="사진" className="max-w-xs max-h-64 mt-2 rounded-lg" />
        )}
        <p className="text-xs text-gray-600 text-right mt-2">{time}</p>
      </div>
    </div>
 
    );
}
