import "./App.css";
import About from "./Componenst/About.jsx";
import Home from "./Componenst/Home";
import UserStore from "./Userstore.jsx";

function App() {
  const store = new UserStore();
  return (
    <>
      {/* <UserStore /> */}
      <Home store={store} />
      <About store={store} />
    </>
  );
}

export default App;
