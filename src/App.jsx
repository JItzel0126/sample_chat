import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Header from './components/Header/Header'
// import MessageBubble from './components/MessageBubble/MessageBubble'
// import ChoiceButton from './components/ChoiceButton/ChoiceButton'
import SplashScreen from './pages/SplashScreens/SplashScreen.jsx'
import HomeScreen from './pages/HomeScreen/HomeScreen.jsx'

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen">
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<HomeScreen />} />
      </Routes>
     </BrowserRouter> 
    </div>
  )
}

export default App;