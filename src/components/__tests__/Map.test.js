import React from 'react';
import { shallow } from 'enzyme';
import Map from '../Map';

describe('Map', () => {

    let mountedMap

    beforeEach(() => {
        mountedMap = shallow(<Map />);
    })

    it('Shallow rendering of Map should work', () => {
        let mountedMap = shallow(<Map />);
    });

    it('contains an image', () => {
        const images = mountedMap.find('img');
        expect(images.length).toBe(1);
    });

    it('displays the none map when no params are given', () => {
        const defaultMap = mountedMap.find('img[src="images/none.png"]');
        expect(defaultMap.length).toBe(1);
    });

})