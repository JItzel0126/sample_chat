// src/pages/HomeScreen/FriendList.jsx
import TutorialCard from '../../components/FriendCard/TutorialCard'

export default function FriendList(){
    return(
      <div className="flex-1 overflow-y-auto px-4 mt-4">
            {/* 친구 목록 반복 */}
        <TutorialCard />
      </div>
    )
}

