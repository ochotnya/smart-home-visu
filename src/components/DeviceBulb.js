import React, { useState } from "react";
import "./Device.css";
import { AiFillBulb, AiOutlinePoweroff } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
function DeviceBulb({ name }) {
  const [turnedOn, setTurnedOn] = useState(false);
  return (
    <div className="device-container" onClick={() => setTurnedOn(!turnedOn)}>
      <div className="device-container__header">Żarówka</div>
      <div className="device-container__name">{name}</div>
      <div className="device-container__content">
        <AiFillBulb size={30} className={turnedOn ? "bulbOn" : "bulbOff"} />
      </div>
      <div className="device-container__connection-state">Połączono</div>
    </div>
  );
}

export default DeviceBulb;
