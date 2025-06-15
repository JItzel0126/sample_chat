// HomeScreen/HomeHeader.jsx
import logo from '../../assets/papaya-logo-cc.png'

function ChatHeader(){
    return(
    <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
            <img src={logo} alt="logo" className="w-12 h-12" />
            <span className="text-lg font-semibold text-gray-600">Chat Room</span>
        </div>
        <span className="text-lg w-12 h-12">🔋</span>
    </div>
    );
}

export default ChatHeader;