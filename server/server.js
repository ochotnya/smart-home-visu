const { json } = require("express");
const express = require("express");
const ws = require("ws");
const app = express();
const server = require("http").createServer(app);

const port = 4000;
var room1 = {
  id: "123",
  name: "Salon",
  devices: [
    {
      type: "bulb",
      id: "bulb1",
      name: "Lampa",
      connectionState: "connected",
      isTurnedOn: true,
      brightness: 12,
      color: "#eeccff",
    },
    {
      type: "outlet",
      id: "outlet1",
      name: "Gniazdko TV",
      connectionState: "connected",
      isTurnedOn: true,
      powerConsumption: 89,
    },
    {
      type: "temperatureSensor",
      id: "temperatureSensor1",
      name: "W salonie",
      connectionState: "connected",
      temperature: 23.2,
    },
  ],
};

var room2 = {
  id: "456",
  name: "Sypialnia",
  devices: [
    {
      type: "bulb",
      id: "bulb2",
      name: "Lampa",
      connectionState: "disconnected",
      isTurnedOn: true,
      brightness: 0,
      color: "#eeccff",
    },
    {
      type: "bulb",
      id: "bulb3",
      name: "Lampa",
      connectionState: "poorConnection",
      isTurnedOn: true,
      brightness: 50,
      color: "#eeccff",
    },
    {
      type: "bulb",
      id: "bulb4",
      name: "Lampa",
      connectionState: "connected",
      isTurnedOn: true,
      brightness: 30,
      color: "#eeccff",
    },
    {
      type: "temperatureSensor",
      id: "temperatureSensor2",
      name: "W sypialni",
      connectionState: "connected",
      temperature: 18.5,
    },
  ],
};

const wsServer = new ws.Server({ server: server });

wsServer.on("connection", (ws) => {
  console.log("new connection");
  ws.send(JSON.stringify({ topic: "rooms", data: [room1, room2] }));

  ws.on("message", (message) => {
    const content = JSON.parse(message);
    console.log("received: %s", content);
    if (content.topic === "setTemp") {
      console.log("Setting temperature");
      const data = JSON.parse(content.data);
      const elementIndex = room1.devices.findIndex(
        (device) => device.id === data.id
      );
      room1.devices[elementIndex] = {
        ...room1.devices[elementIndex],
        temperature: data.value,
      };
      console.log("sending data");
      ws.send(JSON.stringify({ topic: "rooms", data: [room1, room2] }));
    }
  });
});
server.listen(port, () => console.log("Started"));
