import React from 'react';
import {shallow} from 'enzyme';
import Home from '.';

describe('Home', () => {
    describe('Rendering', () => {
        it('should render text area correctly', () => {
            const wrapper = shallow(<Home />);
            expect(wrapper.find('.snippet')).toHaveLength(1);
        });

        it('should render save button correctly', () => {
            const wrapper = shallow(<Home />);
            const input = wrapper.find('.save')
            expect(input).toHaveLength(1);
            expect(input.prop('value')).toEqual('Save')
        });
    });
});
