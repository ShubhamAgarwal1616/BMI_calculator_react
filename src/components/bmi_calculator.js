import React from "react";

export default class BmiCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: "",
      weight: "",
      bmi: ""
    };
    this.height_in_meter = this.height_in_meter.bind(this);
    this.weight_in_kilogram = this.weight_in_kilogram.bind(this);
    this.compute = this.compute.bind(this);
  }

  render() {
    return (
      <div className="bmi-calculator" align="center">
        <input
          className="height"
          value={this.state.height}
          onChange={this.height_in_meter}
          placeholder={"height"}
        />
        <br/>
        <input
          className="weight"
          value={this.state.weight}
          onChange={this.weight_in_kilogram}
          placeholder={"weight"}
        />
        <br/>
        <button className="get-bmi" onClick={this.compute}>
          GET BMI
        </button>
        <span className="bmi">{this.state.bmi}</span>
      </div>
    );
  }

  height_in_meter(h) {
    this.setState({height: h.target.value});
  }

  weight_in_kilogram(w) {
    this.setState({weight: w.target.value});
  }

  compute() {
    let bmi = (this.state.weight / this.state.height ** 2);
    this.setState({bmi: bmi});
  }
}
