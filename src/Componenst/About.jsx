import React from "react";
import { observer } from "mobx-react-lite";

function About({ store }) {
  return (
    <>
      <div>About: - {store.userInfo.name}</div>
      <h1>
        {store.userInfo.name} - {store.userInfo.id}
      </h1>
    </>
  );
}

export default observer(About);
