import React from "react";
import { shallow } from "enzyme";
import Price from "./Price";

describe("Price", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Price />);
    expect(wrapper).toMatchSnapshot();
  });
});
