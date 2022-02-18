import { useState } from "react";
import "./App.css";
import Popup from "./components/Popup";
import RoomSection from "./components/RoomSection";
import interact from "interactjs";
import { DataContext } from "./context/DataContext";

const myDevices = [
  {
    type: "bulb",
    id: "bulb1",
    name: "Lampa",
    connectionState: "connected",
    isTurnedOn: true,
    brightness: 12,
    color: "#eeccff",
  },
  {
    type: "outlet",
    id: "outlet1",
    name: "Gniazdko TV",
    connectionState: "connected",
    isTurnedOn: true,
    powerConsumption: 54,
  },
  {
    type: "temperatureSensor",
    id: "temperatureSensor1",
    name: "W salonie",
    connectionState: "connected",
    temperature: 23.2,
  },
];

function App() {
  const [isOpenPopup, setOpenPopup] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState("");
  const [devices, setDevices] = useState(myDevices);
  const openPopup = (data) => {
    setOpenPopup(true);
  };
  const testFcn = () => {
    console.log("printuije");
  };
  const position = { x: 0, y: 0 };
  interact(".popup").draggable({
    inertia: false,
    listeners: {
      move(event) {
        position.x += event.dx;
        position.y += event.dy;

        event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
      },
    },
  });
  const changeFcn = () => {
    const updatedList = devices.map((device) => {
      if (device.id === "outlet1") {
        return { ...device, powerConsumption: 88 };
      } else {
        return device;
      }
    });
    setDevices(updatedList);
  };
  return (
    <DataContext.Provider
      value={{ selectedDevice, setSelectedDevice, openPopup, testFcn, devices }}
    >
      <div className="App">
        <Popup open={isOpenPopup} />
        <button onClick={() => setOpenPopup(false)}>close</button>
        <button onClick={changeFcn}>zmiana</button>
        <div className="content">
          <RoomSection roomName="Salon" />
          <RoomSection roomName="Sypialnia" />
          <RoomSection roomName="Garaż" />
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
