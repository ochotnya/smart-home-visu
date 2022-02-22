import React, { useContext } from "react";
import "./Device.css";

import { DataContext } from "../context/DataContext";

function DeviceTemperatureSensor({ data, room }) {
  const { setSelectedRoom, setSelectedDevice, openPopup } =
    useContext(DataContext);
  const clickHandler = () => {
    setSelectedDevice(data.id);
    setSelectedRoom(room);
    openPopup();
  };
  return (
    <div className="device-container" onClick={clickHandler}>
      <div className="device-container__header">Temperatura</div>
      <div className="device-container__name">{data.name}</div>
      <div className="device-container__content">{data.temperature}°C</div>
      <div className="device-container__connection-state">Połączono</div>
    </div>
  );
}

function DetailsTemperature({ data }) {
  return (
    <div className="details__container">
      <div className="details__temperature">
        Temperatura: {data.temperature}°C
      </div>
    </div>
  );
}
export { DetailsTemperature };
export default DeviceTemperatureSensor;
