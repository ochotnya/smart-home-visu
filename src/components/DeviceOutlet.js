import React, { useContext, useState } from "react";
import "./Device.css";
import { DataContext } from "../context/DataContext";

function DeviceOutlet({ data }) {
  const { setSelectedDevice, openPopup } = useContext(DataContext);

  const clickHandler = () => {
    setSelectedDevice(data.id);
    openPopup();
  };
  return (
    <div className="device-container" onClick={clickHandler}>
      <div className="device-container__header">Gniazdko</div>
      <div className="device-container__name">{data.name}</div>
      <div className="device-container__content">{data.powerConsumption}W</div>
      <div className="device-container__connection-state">Połączono</div>
    </div>
  );
}

function DetailsOutlet({ data }) {
  return (
    <div className="details__container">
      <div class="details__info">
        <div className="details__turned-on">{data.isTurnedOn}</div>
        <div className="details__power">{data.powerConsumption}</div>
      </div>
    </div>
  );
}

export default DeviceOutlet;
export { DetailsOutlet };
