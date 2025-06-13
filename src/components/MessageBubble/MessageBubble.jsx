function MessageBubble(){
    return (
        <div style={{
        backgroundColor: "#782e2e",
        padding: "1rem",
        borderRadius: "1rem",
        maxWidth: "400px",
        boxShadow: "0 0 10px rgba(161, 19, 19, 0.73)"
      }}>
        <p>친구: <strong>너 어디야!?</strong></p>
        <p>친구: 지금 밖에 난리 났어!!</p>
        <p>친구: 빨리 나와!!</p>
      </div>
    );
}

export default MessageBubble;