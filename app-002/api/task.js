import axios from "axios";

const instance = axios.create({
  baseURL: "https://parseapi.back4app.com/classes/",
  headers: {
    "X-Parse-Application-Id": "rOvi11Jb1gCgmdkXCx1xTmUBjTB86ejziGfj4Rsl",
    "X-Parse-REST-API-Key": "3loJiIFwzL9cjSz1EY6we5io4UNGanrA4SeS2ScK",
  },
});

export const getTasks = () => instance.get("Task").then((res) => res.data);

export const updateTask = (task) => {
  return instance.put(`/Task/${task.objectId}`, task, {
    headers: { "Content-Type": "application/json" },
  });
};
