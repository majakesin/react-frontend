import React from "react";
import {
  getLikesDislikes,
  addCreatedCommentToComments,
} from "../store/actions/movieActions";
import store from "../store/store";
import { socket_url } from "../constants/constants";

const socket = new WebSocket(socket_url);
const EVENTS = [
  {
    isAppicable: (eventType) => eventType === "movie_like",
    handle: (data) => store.dispatch(getLikesDislikes(data.id)),
  },
  {
    isAppicable: (eventType) => eventType === "movie_comment",

    handle: (data) =>
      store.dispatch(
        addCreatedCommentToComments({
          title: data.title,
          description: data.description,
        })
      ),
  },
];

export const socketOnMessage = () => {
  socket.onmessage = function (event) {
    console.log(event);
    const data = JSON.parse(event.data);
    try {
      const handler = EVENTS.find((ev) => ev.isAppicable(data.type));
      handler.handle(data);
    } catch (exception) {
      console.log(exception.message);
    }
  };
};

export const socketSendData = (data) => {
  const stringify_data = JSON.stringify(data);
  socket.send(stringify_data);

  socketOnMessage();
};
