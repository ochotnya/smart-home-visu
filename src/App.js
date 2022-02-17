import "./App.css";
import RoomSection from "./components/RoomSection";

function App() {
  return (
    <div className="App">
      <div className="content">
        <RoomSection roomName="Salon" />
        <RoomSection roomName="Sypialnia" />
        <RoomSection roomName="Garaż" />
      </div>
    </div>
  );
}

export default App;
