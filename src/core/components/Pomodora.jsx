import React from "react";
import "./Pomodora.css";

export default class Pomodora extends React.Component {
  constructor() {
    super();
    this.state = {
      ticking: false,
      time: 100,
      interval: null,
    };
  }

  componentDidMount = () => {
    this.state.interval = setInterval(() => {
      if (this.state.time > 0) {
        this.setState({ time: this.state.time - 1 });
      }
    }, 1000);
  };

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <div id="pomodora">
        <p>{this.state.time}</p>
      </div>
    );
  }
}
