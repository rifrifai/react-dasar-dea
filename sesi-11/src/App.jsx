/* eslint-disable no-constant-condition */
import { useState } from "react";
import "./App.css";
import Introduction from "./components/Introduction";
import { useEffect } from "react";

function App() {
  // wife as getter, setWife as setter
  const [wife, setWife] = useState(0);
  const [wifeName, setWifeName] = useState("");

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

  // ini akan di eksekusi jika ada tombol yang dipencet
  // useEffect(() => {
  //   console.info("Test");
  // });

  // ini akan di eksekusi HANYA sekali ketika membuka browser
  // useEffect(() => {
  //   alert("UseEffect with { ]");
  // }, []);

  // ini akan selalu di eksekusi ketika ada value nya
  useEffect(() => {
    if (wife == 1) {
      setWifeName("Arum");
    } else if (wife == 2) {
      setWifeName("Marming");
    } else if (wife == 3) {
      setWifeName("Tyas");
    } else {
      setWifeName("Diah");
    }
  }, [wife]);

  return (
    <>
      <h3>My wife is {wifeName}</h3>
      <h3>I have {wife} wife</h3>
      <button onClick={() => AddWife()}>Add wife</button>
      <button onClick={() => ReduceWife()}>Reduce wife</button>
      <Introduction name="Diah Arum" />
      <Introduction name="Marming Tyas" />
    </>
  );
}

export default App;
