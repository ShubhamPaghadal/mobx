import React from "react";
import { observer } from "mobx-react-lite";

function Home({ store }) {
  const changeName = () => {
    store.updateUser("Shubham");
  };
  return (
    <>
      <div>Home</div>
      <h1>
        {store.userInfo.name} - {store.userInfo.id}
      </h1>
      <button onClick={changeName}>Change name </button>
    </>
  );
}

export default observer(Home);
