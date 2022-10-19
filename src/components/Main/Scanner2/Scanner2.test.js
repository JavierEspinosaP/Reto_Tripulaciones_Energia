import React from "react";
import { shallow } from "enzyme";
import Scanner from "./Scanner2";

describe("Scanner", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Scanner2 />);
    expect(wrapper).toMatchSnapshot();
  });
});
