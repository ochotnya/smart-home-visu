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
        <DeviceOutlet name="Narożnik TV" />
        <DeviceTemperatureSensor name="Salon" />
        <DeviceOutlet name="Narożnik TV" />
        <DeviceTemperatureSensor name="Salon" />
        <DeviceOutlet name="Narożnik TV" />
        <DeviceTemperatureSensor name="Salon" />
      </div>
    </div>
  );
}

export default RoomSection;
