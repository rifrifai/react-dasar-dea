/* eslint-disable react/prop-types */
import { useState } from "react";

const MyButton = (props) => {
  const [count, setCount] = useState(0);

  function CountHandler() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={() => props.clicked() + CountHandler()}>
        Click Me! {count}
      </button>
    </>
  );
};

export default MyButton;
