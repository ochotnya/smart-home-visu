import { createContext } from "react";

export const DataContext = createContext({
  selectedDevice: "none",
  openPopup: () => {},
  setSelectedDevice: () => {},
  testFcn: () => {},
  devices: [],
});
