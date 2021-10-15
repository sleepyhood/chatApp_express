"use strict";
const socket = io();

const nickname = document.querySelector("#nickname");
const chatList = document.querySelector(".chatting-list");
const chatInput = document.querySelector(".chatting-input");

socket.emit("채팅", "from front");

socket.on("채팅", (data) => {
  console.log(data);
});

console.log(socket);
