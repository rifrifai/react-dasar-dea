import { useState } from "react";
import NavigationBar from "./components/NavigationBar";

function App() {
  const [navValue, setNavValue] = useState("");

  const changeNavbarValue = () => {
    setNavValue("Services");
  };

  return (
    <>
      <NavigationBar navValue={navValue} />
      <h1>This is Homepage</h1>
      {/* <p>{navValue}</p> */}
      <button onClick={() => changeNavbarValue()}>Change Navigation</button>
    </>
  );
}

export default App;
