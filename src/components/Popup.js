import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { DetailsBulb, InfoBulb } from "./DeviceBulb";
import { DetailsOutlet } from "./DeviceOutlet";
import { DetailsTemperature } from "./DeviceTemperatureSensor";
import "./Popup.css";
function Popup({ open, data }) {
  const { selectedDevice, devices } = useContext(DataContext);
  const deviceData = devices.find((item) => item.id === selectedDevice);
  // console.log(deviceData);
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
      <div className="popup__header">{selectedDevice}</div>
      <div className="popup__content"></div>
      {details}
    </div>
  ) : (
    <></>
  );
}

export default Popup;
