/* eslint-disable no-constant-condition */
import { useState } from "react";
import "./App.css";
import Introduction from "./components/Introduction";

function App() {
  // wife as getter, setWife as setter
  const [wife, setWife] = useState(0);

  const ReduceWife = () => {
    if (wife > 0 && wife <= 4) {
      setWife(wife - 1);
    }
  };

  const AddWife = () => {
    if (wife >= 0 && wife < 4) {
      setWife(wife + 1);
    }
  };

  return (
    <>
      <h3>I have {wife} wife</h3>
      <button onClick={() => AddWife()}>Add wife</button>
      <button onClick={() => ReduceWife()}>Reduce wife</button>
      <Introduction name="Diah Arum" />
      <Introduction name="Marming Tyas" />
    </>
  );
}

export default App;
