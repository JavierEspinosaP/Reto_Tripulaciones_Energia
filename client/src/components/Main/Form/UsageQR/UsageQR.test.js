import React from "react";
import { shallow } from "enzyme";
import UsageQR from "./UsageQR";

describe("UsageQR", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<UsageQR />);
    expect(wrapper).toMatchSnapshot();
  });
});
