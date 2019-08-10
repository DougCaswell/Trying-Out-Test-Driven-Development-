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
    })

})