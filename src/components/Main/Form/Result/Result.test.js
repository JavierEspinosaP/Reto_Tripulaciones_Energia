import React from "react";
import { shallow } from "enzyme";
import Result from "./Result";

describe("Result", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Result />);
    expect(wrapper).toMatchSnapshot();
  });
});
