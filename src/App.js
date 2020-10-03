import React from "react";
import "./App.scss";

import {AppStore} from "./Store";
import {Person} from "./Person";


export const App = () => {

  const {name, title} = AppStore.useState(state => state.attributes)

  return (
    <div className="app">
      <p>{name}</p>
      <p>{title}</p>
      <Person/>
    </div>
  );
}
