import React, { useContext } from "react";
import "./Device.css";
import { DataContext } from "../context/DataContext";
import { ImSwitch } from "react-icons/im";

function DeviceOutlet({ data, room }) {
  const { setSelectedRoom, setSelectedDevice, openPopup } =
    useContext(DataContext);

  const clickHandler = () => {
    setSelectedDevice(data.id);
    setSelectedRoom(room);
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
      <div className="details__power">Pobór mocy: {data.powerConsumption}W</div>
      <div className="details__turned-on">
        <ImSwitch
          style={{ color: data.isTurnedOn ? "green" : "red" }}
          size={50}
        />
      </div>
    </div>
  );
}

export default DeviceOutlet;
export { DetailsOutlet };
