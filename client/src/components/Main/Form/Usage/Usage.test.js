import React from "react";
import { shallow } from "enzyme";
import Usage from "./Usage";

describe("Usage", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Usage />);
    expect(wrapper).toMatchSnapshot();
  });
});
