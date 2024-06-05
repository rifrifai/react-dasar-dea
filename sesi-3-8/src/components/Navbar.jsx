/* eslint-disable react/prop-types */
export default function Navbar(props) {
  return (
    <>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">{props.navText}</a>
        </li>
      </ul>
    </>
  );
}
