import React from "react";
import { shallow } from "enzyme";
import AdvanceResult from "./AdvanceResult";

describe("AdvanceResult", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AdvanceResult />);
    expect(wrapper).toMatchSnapshot();
  });
});
