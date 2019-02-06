import {mount} from 'enzyme';
import React from 'react';
import BmiCalculator from '../../components/bmi_calculator';
import '../../../setupTests'

describe("Bmi_calculator", () => {
  let componentRoot;
  beforeEach(() => {
    componentRoot = mount(<BmiCalculator/>);
  });
  it("renders a root element with a class name bmi-calculator", () => {

    expect(componentRoot.exists("div.bmi-calculator")).toBeTruthy();
  });

  it("renders a text input with class name height", () => {
    expect(componentRoot.exists("input.height")).toBeTruthy();
  });

  it("renders a text input with class name weight", () => {
    expect(componentRoot.exists("input.weight")).toBeTruthy();
  });

  it("renders a button with class name get-bmi", () => {
    expect(componentRoot.exists("button.get-bmi")).toBeTruthy();
  });

  it("expects text of button to Get Bmi", () => {
    expect(componentRoot.find("button.get-bmi").text()).toBe("GET BMI");
    expect(componentRoot.exists("button.get-bmi")).toBeTruthy();
  });

  it("checks the clicking functionality of button", () => {
    let height = componentRoot.find("input.height").instance();
    let weight = componentRoot.find("input.weight").instance();
    height.value=10;
    weight.value=100;
    let button=componentRoot.find("button.get-bmi");
    button.simulate('click');
    expect(componentRoot.find("span.bmi").text()).toEqual("1");
  });
});