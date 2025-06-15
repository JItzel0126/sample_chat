import logo from '../../assets/papaya-logo-cc.png'

export default function MessageBubble(){
    return (
      <div className="flex items-start p-2">
        <p className="text-xl font-semibold text-center"><img src={logo} className="w-16 h-16 rounded-full ml-3" />쑤횬</p>
        <div className="max-w-md bg-yellow-50 shadow-md rounded-lg p-4 m-4 justify-left text-yellow-600 font-bold">
          <p className="font-extrabold text-lg">야 지금 뭐해?</p>
          <p>너 지금 어디야!?</p>
          <p>지금 밖에 난리 났어!!</p>
          <p className="text-right">1시간 전</p>
        </div>
      </div>
    );
}
