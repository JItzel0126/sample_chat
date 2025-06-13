import Header from './components/Header/Header';
import MessageBubble from './components/MessageBubble/MessageBubble';
import ChoiceButton from './components/ChoiceButton/ChoiceButton';

function App() {
  return (
    <div style={{
      backgroundColor: "#d6d67c",
      width: "100vw",
      height: "100vh"
    }}>
      <Header />
    <div style={{
      backgroundColor: "#d6d67c",
      color: "#fff",
      fontFamily: "sans-serif",
      margin: "0 auto",
      padding: "5vh 5vw 5vh 5vw",
      width: "90vw",
      height: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "start"
    }}>
       <MessageBubble />    
      </div>
       <ChoiceButton />
    </div>
  );
}

export default App;