// HomeScreen/UserProfile.jsx
import logo from '../../assets/papaya-logo-cc.png'

function UserProfile(){
    return(
        <div className="bg-white shadow p-3 mx-4 rounded-md flex items-center">
            <img src={logo} className="w-16 h-16 rounded-full mr-3" />
            <div>
                <p className="font-bold text-gray-800">이름</p>
                <p className="text-sm text-gray-500">상태메시지</p>
            </div>
        </div>
    )
}

export default UserProfile;