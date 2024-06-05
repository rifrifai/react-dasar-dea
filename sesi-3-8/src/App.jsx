// import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import MyButton from "./components/MyButton";
import Navbar from "./components/Navbar";

function App() {
  // const [count, setCount] = useState(0);
  const navText = "Services";

  const clicked = () => {
    return alert("Button is Clicked!");
  };

  const footer = () => {
    return (
      <>
        <i>goodness!</i>
        <marquee>
          Kebaikan adalah kebaikan tanpa tanda jasa! Semangat belajarnya!
        </marquee>
      </>
    );
  };

  return (
    <>
      <Navbar className="navbar" navText={navText} />
      <h1>Just Learning Everyday! 🏫</h1>
      <MyButton clicked={clicked} />
      <Footer footer={footer} />
    </>
  );
}

export default App;
