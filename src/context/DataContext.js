import { createContext } from "react";

export const DataContext = createContext({
  selectedDevice: {},
  openPopup: () => {},
  closePopup: () => {},
  setSelectedDevice: () => {},
  testFcn: () => {},
  setSelectedRoom: () => {},
  rooms: [],
});
