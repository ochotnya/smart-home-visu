import { createContext } from "react";

export const DataContext = createContext({
  selectedDevice: "none",
  openPopup: () => {},
  closePopup: () => {},
  setSelectedDevice: () => {},
  testFcn: () => {},
  devices: [],
});
