import React from 'react';
import { shallow } from 'enzyme';
import StoreLocator from '../StoreLocator';

it('Shallow rendering of StoreLocator should work', () => {
    let mountedStoreLocator = shallow(<StoreLocator />);
});