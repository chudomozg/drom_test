import React, { Component } from "react";

class OrderTime extends Component {
  constructor(props) {
    super(props);
    // this.options = props.options;
    this.options = null;
  }
  render() {
    return <select>{this.options}</select>;
  }
}

export default OrderTime;
