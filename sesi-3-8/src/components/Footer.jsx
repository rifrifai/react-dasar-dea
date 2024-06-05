/* eslint-disable react/prop-types */
import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h4>&copy; Copyright by rifTecH {this.props.footer()}</h4>
      </>
    );
  }
}

export default Footer;
