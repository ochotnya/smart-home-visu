import React from "react";
import DeviceBulb from "./DeviceBulb";
import DeviceOutlet from "./DeviceOutlet";
import DeviceTemperatureSensor from "./DeviceTemperatureSensor";
import "./RoomSection.css";
function RoomSection({ roomName }) {
  return (
    <div className="room-container">
      <div className="room-container__header">{roomName}</div>
      <div className="room-container__content">
        <DeviceBulb name="Centralna" />
        <DeviceOutlet />
        <DeviceTemperatureSensor />
      </div>
    </div>
  );
}

export default RoomSection;
