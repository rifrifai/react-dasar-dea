import { useState } from "react";

const MyButton = () => {
  const [count, setCount] = useState(0);

  function CountHandler() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={CountHandler}>Click Me! {count}</button>
    </>
  );
};

export default MyButton;
