import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

it('Shallow rendering of Button should work', () => {
    let mountedButton = shallow(<Button />);
});