import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

it('Shallow rendering of Header should work', () => {
    let mountedApp = shallow(<Header />);
});