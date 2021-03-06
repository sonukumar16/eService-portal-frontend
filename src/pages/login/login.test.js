import configureMockStore from 'redux-mock-store';
import * as Redux from 'react-redux';
import { mount, shallow } from "enzyme";
import { render, cleanup } from "@testing-library/react";
import thunk from 'redux-thunk';
import renderer from 'react-test-renderer';

import Login from './';
import { Button } from '@material-ui/core';

describe('Login test cases', () => {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({
        auth: {},
    });
    const shallowWrapper = () => {
        return shallow(
            <Redux.Provider store={store}>
                <Login />
            </Redux.Provider>
        )
    }
    
    afterEach(cleanup);

    it('should match snapshot', () => {
        const wrapper = shallowWrapper();
        const tree = renderer.create(wrapper).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render button correctly', () => {
        const wrapper = shallowWrapper();
        expect(wrapper).toBeDefined();
        expect(wrapper.find('button')).toBeTruthy();
    });

    it('Should have Sign In text', () => {
        const wrapper = shallow(
            <Redux.Provider store={store}>
                <Login />
            </Redux.Provider>
        )
        const { getByText } = render(wrapper)
        expect(getByText('Sign In')).toHaveTextContent("Sign In");
    });
});
