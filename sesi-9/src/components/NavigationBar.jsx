/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
// import React from "react";
// import { Nav, Navbar, Container } from "react-bootstrap";
import "./NavigationBar.css";

export default function NavigationBar({ navValue }) {
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
          <a href="#">{!navValue ? "Contact" : navValue}</a>
        </li>
      </ul>
    </>
  );
}
