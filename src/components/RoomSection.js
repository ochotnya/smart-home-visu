import React, { useContext } from "react";
import DeviceBulb from "./DeviceBulb";
import DeviceOutlet from "./DeviceOutlet";
import DeviceTemperatureSensor from "./DeviceTemperatureSensor";
import "./RoomSection.css";
import { DataContext } from "../context/DataContext";

function RoomSection({ roomName }) {
  const { devices } = useContext(DataContext);
  return (
    <div className="room-container">
      <div className="room-container__header">{roomName}</div>
      <div className="room-container__content">
        {devices.map((device) => {
          if (device.type === "bulb") {
            return <DeviceBulb key={device.id} data={device} />;
          } else if (device.type === "outlet") {
            return <DeviceOutlet key={device.id} data={device} />;
          } else if (device.type === "temperatureSensor") {
            return <DeviceTemperatureSensor key={device.id} data={device} />;
          }
        })}
      </div>
    </div>
  );
}

export default RoomSection;
