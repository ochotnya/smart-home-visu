import React from "react";
import "./Device.css";

function DeviceTemperatureSensor({ name }) {
  return (
    <div className="device-container">
      <div className="device-container__header">Temperatura</div>
      <div className="device-container__name">{name}</div>
      <div className="device-container__content">21.5°</div>
      <div className="device-container__connection-state">Połączono</div>
    </div>
  );
}

export default DeviceTemperatureSensor;
