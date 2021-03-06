import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { DetailsBulb } from "./DeviceBulb";
import { DetailsOutlet } from "./DeviceOutlet";
import { DetailsTemperature } from "./DeviceTemperatureSensor";
import { AiOutlineClose } from "react-icons/ai";
import connectionStateDictionary from "../dictionary";
import "./Popup.css";
function Popup({ open, selectedDevice, position }) {
  const { closePopup } = useContext(DataContext);

  let details = {};
  if (selectedDevice) {
    switch (selectedDevice.type) {
      case "bulb":
        details = <DetailsBulb data={selectedDevice} />;
        break;
      case "outlet":
        details = <DetailsOutlet data={selectedDevice} />;
        break;
      case "temperatureSensor":
        details = <DetailsTemperature data={selectedDevice} />;
        break;

      default:
        break;
    }
  }

  return open && selectedDevice ? (
    <div
      className="popup"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      <div className="popup__top-bar">
        <div className="popup__header">
          {selectedDevice.name}
          <div className="popup__connection-state">
            Stan połączenia:{" "}
            {connectionStateDictionary[selectedDevice.connectionState]}
          </div>
        </div>
        <AiOutlineClose
          className="popup__close"
          onClick={() => closePopup()}
          size={20}
        />
      </div>

      <div className="popup__content">{details}</div>
    </div>
  ) : (
    <></>
  );
}

export default Popup;
