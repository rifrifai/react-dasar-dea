// import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import MyButton from "./components/MyButton";
import Navbar from "./components/Navbar";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar className="navbar" />
      <h1>Just Learning Everyday! 🏫</h1>
      <MyButton />
      <Footer />
    </>
  );
}

export default App;
