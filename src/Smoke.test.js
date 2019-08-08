import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('Shallow rendering of App should work', () => {
    shallow(<App />);
});