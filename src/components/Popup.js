import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { DetailsBulb, InfoBulb } from "./DeviceBulb";
import { DetailsOutlet } from "./DeviceOutlet";
import { DetailsTemperature } from "./DeviceTemperatureSensor";
import { AiOutlineClose } from "react-icons/ai";
import "./Popup.css";
function Popup({ open, data }) {
  const { selectedDevice, devices, closePopup } = useContext(DataContext);
  const deviceData = devices.find((item) => item.id === selectedDevice);
  let details = {};
  if (deviceData) {
    switch (deviceData.type) {
      case "bulb":
        details = <DetailsBulb data={deviceData} />;
        break;
      case "outlet":
        details = <DetailsOutlet data={deviceData} />;
        break;
      case "temperatureSensor":
        details = <DetailsTemperature data={deviceData} />;
        break;

      default:
        break;
    }
  }

  return open && deviceData ? (
    <div className="popup">
      <div className="popup__top-bar">
        <div className="popup__header">
          {deviceData.name}
          <div className="popup__connection-state">
            Stan połączenia: {deviceData.connectionState}
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
