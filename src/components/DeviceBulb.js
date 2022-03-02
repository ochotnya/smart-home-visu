import React, { useContext } from "react";
import "./Device.css";
import { AiFillBulb } from "react-icons/ai";
import { ImSwitch } from "react-icons/im";
import { DataContext } from "../context/DataContext";
import connectionStateDictionary from "../dictionary";

//dashboard control
function DeviceBulb({ data, room }) {
  const { setSelectedRoom, setSelectedDevice, openPopup } =
    useContext(DataContext);

  const clickHandler = () => {
    setSelectedDevice(data.id);
    setSelectedRoom(room);
    openPopup();
  };
  return (
    <div className="device-container" onClick={clickHandler}>
      <div className="device-container__header">Światło</div>
      <div className="device-container__name">{data.name}</div>
      <div className="device-container__content">
        <AiFillBulb
          size={30}
          className={data.isTurnedOn ? "bulbOn" : "bulbOff"}
        />
      </div>
      <div className="device-container__connection-state">
        {connectionStateDictionary[data.connectionState]}
      </div>
    </div>
  );
}

//popup info
function DetailsBulb({ data }) {
  return (
    <div className="details__light-controls">
      <div className="details__light__turned-on">
        <ImSwitch
          style={{ color: data.isTurnedOn ? "green" : "red" }}
          size={50}
        />
      </div>
      <input
        className="details__light-color"
        type="color"
        defaultValue={data.color}
      />
      <div className="details__light-brightness">
        Jasność: {data.brightness}
        <input type="range" />
      </div>
    </div>
  );
}
export { DetailsBulb };
export default DeviceBulb;
