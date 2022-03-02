import { useEffect, useState } from "react";
import "./App.css";
import Popup from "./components/Popup";
import RoomSection from "./components/RoomSection";
import interact from "interactjs";
import { DataContext } from "./context/DataContext";

const socket = new WebSocket("ws://localhost:4000");

function App() {
  const [isOpenPopup, setOpenPopup] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");
  const [rooms, setRooms] = useState([]);
  const [roomsLoaded, setRoomsLoaded] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 }); //popup window position

  //setup draggable window
  interact(".popup")
    .draggable({
      listeners: {
        move(event) {
          setPosition({
            x: (position.x += event.dx),
            y: (position.y += event.dy),
          });
          event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
        },
      },
    })
    .styleCursor(false);

  //functions
  const openPopup = (data) => {
    setOpenPopup(true);
  };

  const closePopup = (data) => {
    setOpenPopup(false);
  };

  const changeTemp = () => {
    const newVal = Math.floor(Math.random() * (50.0 - 10.0 + 1)) + 10.0;
    socket.send(
      JSON.stringify({
        topic: "setTemp",
        data: JSON.stringify({ id: "temperatureSensor1", value: newVal }),
      })
    );
  };

  //effects
  useEffect(() => {
    socket.addEventListener("message", (event) => {
      const content = JSON.parse(event.data);
      if (content.topic === "rooms") {
        setRooms(content.data);
        setRoomsLoaded(true);
      }
    });
  }, []);

  return (
    <DataContext.Provider
      value={{
        setSelectedDevice,
        openPopup,
        setSelectedRoom,
        closePopup,
      }}
    >
      <div className="App">
        {selectedDevice !== "" && (
          <Popup
            position={position}
            open={isOpenPopup}
            selectedDevice={rooms
              .find((room) => room.name === selectedRoom)
              .devices.find((dev) => dev.id === selectedDevice)}
          />
        )}
        <button onClick={changeTemp}>Change temp</button>
        <div className="content">
          {roomsLoaded
            ? rooms.map((room) => {
                return (
                  <RoomSection
                    key={room.id}
                    roomName={room.name}
                    devices={room.devices}
                  />
                );
              })
            : "Ładowanie"}
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
