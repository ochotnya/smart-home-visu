# Sample smarthome dashboard with basic server

To start this app first run the server from "server" folder (npm run devStart), then start React app (npm start)

# Interface

The interface consists of two rooms with multiple devices. You can open a draggable popup with device details by clicking selected control. The layout is responsive, so the page can be used on smartphones.

# Simulation

To simulate real-time update via WebSocket, simply use the button in top left corner. It sends request to server, which then returns random temperature value for temperature sensor in "Salon"
