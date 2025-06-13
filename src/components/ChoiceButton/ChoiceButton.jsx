function ChoiceButton (){
    return (
        <div style={{
             display: "flex",
             flexDirection: "column",
             alignItems: "flex-start",
             padding: "5vh 5vw"
        }}>  
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end", // ← 오른쪽 정렬 핵심!
                width: "100%"           // ← 버튼이 오른쪽 끝까지 갈 수 있게
            }}>
                <div style={{
                    backgroundColor: "#782e2e",
                    padding: "1rem",
                    borderRadius: "1rem",
                    maxWidth: "400px",
                    boxShadow: "0 0 10px rgba(161, 19, 19, 0.73)"
                }}>
        <div style={{
            margin: "0.5rem"
        }}>
        <button style={{
            backgroundColor: "#fff",
            color: "#782e2e",
            border: "none",
            borderRadius: "0.5rem",
            padding: "0.5rem 1rem",
            marginBottom: "0.5rem",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 0 5px rgba(0,0,0,0.3)"
        }}>1. 지금 나가고 있어!</button>
        </div>
        <div style={{
            margin: "0.5rem"
        }}>
        <button style={{
            backgroundColor: "#fff",
            color: "#782e2e",
            border: "none",
            borderRadius: "0.5rem",
            padding: "0.5rem 1rem",
            marginBottom: "0.5rem",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 0 5px rgba(0,0,0,0.3)"
        }}>2. 무슨 일인데?</button>
        </div>
    </div>
  </div>
</div>
    );
}

export default ChoiceButton;