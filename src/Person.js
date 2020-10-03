import React from "react";
import "./Person.scss";

import {AppStore} from "./Store";

export const Person = () => {

  const {name, title} = AppStore.useState(state => state.attributes)

  const update = attrName => e => AppStore.update(s => {
    s.attributes[attrName] = e.target.value;
  });

  return (
    <div className="person">
      <input type="text" value={name} onChange={update("name")}/>
      <input type="text" value={title} onChange={update("title")}/>
    </div>
  );
}
