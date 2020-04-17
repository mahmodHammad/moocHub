import React from "react";
import "./Pomodora.css";

export default class Pomodora extends React.Component {
  constructor() {
    super();
    this.state = {
      ticking: false,
      time: 100,
      interval: null,
      expanded: "",
      hours: 0,
      minutes: 0,
      seconds: 0
    };
    // this.expand = this.expand.bind(this);
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

  // timeToSeconds = time => {
  //   let [numHours, numMinutes, NumSeconds] = time.split(":");
  //   return (Number(numHours) * 60 * 60 +
  //           Number(numMinutes) * 60 +
  //           Number(NumSeconds)
  //   );
  // };

  SecondsToTime = seconds => {

    let hours = Math.floor(seconds / (60 * 60));
    seconds -= hours*60*60;
    let minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;

    return [hours, minutes, seconds];
  }

  expand = () => {
    if (this.state.expanded) {
     this.setState({expanded: ""})
     let interval = setInterval(() => {
       this.setState({time: this.state.time - 1})
     }, 1000)

     this.setState({interval})
     let time;
     time = this.state.hours * 60 * 60 +
            this.state.minutes * 60 + 
            this.state.seconds;
      
     this.setState({time});
    }
    else{
      this.setState({expanded: "expanded"});
      clearInterval(this.state.interval);
      let [hours, minutes, seconds] = this.SecondsToTime(this.state.time)
      this.setState({hours, minutes, seconds});
      console.log(hours, minutes, seconds)
    }
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    let element;
    if(this.state.expanded) {
      element = (
        <div id="pomodora" className={this.state.expanded}>
          <span className="exit" onClick={this.expand}>&times;</span>
          <div className="pom-form">
            <div className="time-segment">
              <label htmlFor="hours">Hours</label>
              <input type="number" value={this.state.hours} onChange={this.handleChange} className="custom" id="hours"/>
            </div>

            <div className="time-segment">
              <label htmlFor="minutes">Minutes</label>
              <input type="number" value={this.state.minutes} onChange={this.handleChange} className="custom" id="minutes"/>
            </div>

            <div className="time-segment">
              <label htmlFor="seconds">Seconds</label>
              <input type="number" value={this.state.seconds} onChange={this.handleChange} className="custom" id="seconds"/>
            </div>
          </div>
        </div>
      )
    }else{
      element = (
        <div id="pomodora" className={this.state.expanded} onClick={this.expand}>
          <p>{this.SecondsToTime(this.state.time).join(":")}</p>
        </div>
      )
    }

    return element;
  }
}
