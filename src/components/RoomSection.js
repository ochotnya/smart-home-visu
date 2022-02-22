import React from "react";
import DeviceBulb from "./DeviceBulb";
import DeviceOutlet from "./DeviceOutlet";
import DeviceTemperatureSensor from "./DeviceTemperatureSensor";
import "./RoomSection.css";

function RoomSection({ roomName, devices }) {
  return (
    <div className="room-container">
      <div className="room-container__header">{roomName}</div>
      <div className="room-container__content">
        {devices.map((device) => {
          if (device.type === "bulb") {
            return <DeviceBulb key={device.id} data={device} room={roomName} />;
          } else if (device.type === "outlet") {
            return (
              <DeviceOutlet key={device.id} data={device} room={roomName} />
            );
          } else if (device.type === "temperatureSensor") {
            return (
              <DeviceTemperatureSensor
                key={device.id}
                data={device}
                room={roomName}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default RoomSection;
