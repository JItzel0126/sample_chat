// src/pages/SplashScreen/SplashScreen.jsx
import React, { useEffect } from 'react' // 페이지 자동전환
import { useNavigate } from 'react-router-dom' // 페이지 이동
import logo from '../../assets/papaya-logo-cc.png' // 경로 맞게 조정

export default function SplashScreen() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home')
    }, 3000)
  return () => clearTimeout(timer) // 혹시 컴포넌트가 언마운트되면 정리
  }, [])
  
  return (
    <div className="bg-lime-200 h-screen text-center flex flex-col itmes-center justify-center">
      <h1 className="text-3xl font-extrabold mb-4 text-gray-800">Last Chat</h1>
      <img src={logo} alt="PapayaTalk Logo" className="mx-auto w-24" />
      <p className="text-gray-500 mt-4">“세상은 무너졌다.<br />마지막 희망은 톡 뿐이었다.”</p>
    </div>
  )
}