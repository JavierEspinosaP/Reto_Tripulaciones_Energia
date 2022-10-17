import React from "react";
import { shallow } from "enzyme";
import Advance from "./Advance";

describe("Advance", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Advance />);
    expect(wrapper).toMatchSnapshot();
  });
});
