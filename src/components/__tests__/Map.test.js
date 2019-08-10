import React from 'react';
import { shallow } from 'enzyme';
import Map from '../Map';

it('Shallow rendering of Map should work', () => {
    let mountedMap = shallow(<Map />);
});