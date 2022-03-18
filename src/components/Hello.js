import React from "react";

class Hello extends React.Component {
  render() {
    return (
      <div>
        Hello <b>{this.props.name}</b>
        {this.props.children}
      </div>
    );
  }
}

export default Hello;
