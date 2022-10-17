import React from "react";
import { shallow } from "enzyme";
import Category from "./Category";

describe("Category", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Category />);
    expect(wrapper).toMatchSnapshot();
  });
});
