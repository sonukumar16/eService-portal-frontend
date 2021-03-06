import React from 'react';
import AdminDashboard from './';
import { Typography } from '@material-ui/core';
import { shallow } from "enzyme";
import { cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer';

describe('renders admin dashboard', () => {

    afterEach(cleanup);
    const wrapper = shallow(<AdminDashboard />)
    it('should match snapshot', () => {
        const tree = renderer.create(wrapper).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("render welcome message", () => {

        expect(wrapper.find(Typography).text()).toEqual('Welcome to admin dashboard');
    })
});