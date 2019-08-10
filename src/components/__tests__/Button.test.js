import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

describe('Button', () => {

    let mountedButton;

    beforeEach(() => {
        mountedButton = shallow(<Button />);
    })

    it('Shallow rendering of Button should work', () => {
        let mountedButton = shallow(<Button />);
    });

    it('renders three buttons', () => {
        const button = mountedButton.find('button');
        expect(button.length).toBe(3);
    });

});

describe('When a location is passed to it', () => {
    let mountedButton;
    let props;

    beforeEach(() => {
        props = {
            location: 'Location1'
        }

        mountedButton = shallow(<Button {...props} />)
    });

    it('displays the location', () => {
        const locName = mountedButton.find('.location-button');
        expect(locName.text()).toEqual('Location1');
    })
})

describe('When no location is passed to it', () => {
    let mountedButton;
    let props;

    beforeEach(() => {
        props = {
            location: undefined
        }

        mountedButton = shallow(<Button {...props} />)
    });

    it('displays the location', () => {
        const locName = mountedButton.find('.location-button');
        expect(locName.text()).toEqual('All Locations');
    })
})