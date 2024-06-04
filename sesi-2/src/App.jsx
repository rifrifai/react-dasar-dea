import "./App.css";
import Introduction from "./components/Introduction";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Profile />
      <Introduction name={"Rifai Abdurrohman"} />
      <Introduction name={"Marming Tyas"} />
    </>
  );
}

export default App;
