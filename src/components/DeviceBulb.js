import React, { useContext, useState } from "react";
import "./Device.css";
import { AiFillBulb } from "react-icons/ai";
import { DataContext } from "../context/DataContext";

function DeviceBulb({ data }) {
  const [turnedOn, setTurnedOn] = useState(false);
  const { setSelectedDevice, openPopup } = useContext(DataContext);

  const clickHandler = () => {
    setSelectedDevice(data.id);
    openPopup();
  };
  return (
    <div className="device-container" onClick={clickHandler}>
      <div className="device-container__header">Światło</div>
      <div className="device-container__name">{data.name}</div>
      <div className="device-container__content">
        <AiFillBulb size={30} className={turnedOn ? "bulbOn" : "bulbOff"} />
      </div>
      <div className="device-container__connection-state">Połączono</div>
    </div>
  );
}

function DetailsBulb({ data }) {
  return (
    <div className="details__container">
      <div class="details__info">
        <div className="details__turned-on">{data.isTurnedOn}</div>
        <div className="details__color">{data.color}</div>
        <div className="details__brightness">{data.brightness}</div>
      </div>
    </div>
  );
}
export { DetailsBulb };
export default DeviceBulb;
