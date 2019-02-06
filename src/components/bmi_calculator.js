import React from "react";

export default class BmiCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bmi: ""
    }
    this.height = React.createRef();
    this.weight = React.createRef();
    this.computeBmi = this.computeBmi.bind(this);
  }

  render() {
    return (
      <div className="bmi-calculator" align="center">
        <input className="height" ref={this.height}/><br />
        <input className="weight" ref={this.weight}/><br />
        <button className="get-bmi" onClick={this.computeBmi}>GET BMI</button>
        <span className="bmi">{this.state.bmi}</span>
      </div>
    );
  }

  computeBmi() {
    let weight = this.weight.current.value;
    let height = this.height.current.value * this.height.current.value;
    let bmi = weight / height;
    this.setState({bmi: bmi})
  }
}

