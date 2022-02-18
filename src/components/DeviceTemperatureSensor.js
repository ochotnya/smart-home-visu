import React, { useContext, useState } from "react";
import "./Device.css";

import { DataContext } from "../context/DataContext";
function DeviceTemperatureSensor({ data }) {
  const { setSelectedDevice, openPopup } = useContext(DataContext);
  const clickHandler = () => {
    setSelectedDevice(data.id);
    openPopup();
  };
  return (
    <div className="device-container" onClick={clickHandler}>
      <div className="device-container__header">Temperatura</div>
      <div className="device-container__name">{data.name}</div>
      <div className="device-container__content">{data.temperature}°</div>
      <div className="device-container__connection-state">Połączono</div>
    </div>
  );
}

function DetailsTemperature({ data }) {
  return (
    <div className="details__container">
      <div class="details__info">
        <div className="details__temperature">{data.temperature}</div>
      </div>
    </div>
  );
}
export { DetailsTemperature };
export default DeviceTemperatureSensor;
