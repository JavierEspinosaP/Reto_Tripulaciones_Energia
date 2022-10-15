import React from "react";
import { shallow } from "enzyme";
import Model from "./Model";

describe("Model", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Model />);
    expect(wrapper).toMatchSnapshot();
  });
});
