import { shallow } from "enzyme";
import { cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer';
import { Typography } from '@material-ui/core';
import UserDashboard from './';


describe('UserDashboard test cases', () => {

    const wrapper = shallow(<UserDashboard />);

    afterEach(cleanup);

    it('should match snapshot', () => {
        const tree = renderer.create(wrapper).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render welcome message', () => {
        expect(wrapper.find(Typography).text()).toEqual("Welcome to user dashboard");
    });

});
