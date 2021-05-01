import socketIOClient from "socket.io-client";
const URL = "http://127.0.0.1:8080";

export const socket = socketIOClient(URL);