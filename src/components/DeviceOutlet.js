import React from "react";
import "./Device.css";

function DeviceOutlet({ name }) {
  return (
    <div className="device-container">
      <div className="device-container__header">Gniazdko</div>
      <div className="device-container__name">{name}</div>
      <div className="device-container__content">142W</div>
      <div className="device-container__connection-state">Połączono</div>
    </div>
  );
}

export default DeviceOutlet;
