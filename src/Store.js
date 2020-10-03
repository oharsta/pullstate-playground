import {Store} from "pullstate";

export const AppStore = new Store({
  attributes: {
    name: "John Doe",
    title: "Professor"
  }
});