import React from 'react';
import {shallow} from 'enzyme';
import Home from '.';

describe('Home', () => {
    describe('Text area', () => {
        describe('Rendering', () => {
            it('should render text area correctly', () => {
                const wrapper = shallow(<Home />)
                expect(wrapper.find('.snippet')).toHaveLength(1);
            })
        })
    })
})
