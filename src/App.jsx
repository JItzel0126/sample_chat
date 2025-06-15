// src/App.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SplashScreen from './pages/SplashScreens/SplashScreen.jsx'
import HomeScreen from './pages/HomeScreen/HomeScreen.jsx'
import ChatRoom from './pages/ChatRoom/ChatRoom.jsx'

function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/chatroom" element={<ChatRoom />} />
      </Routes>
     </BrowserRouter> 
    </div>
  )
}

export default App;