import React from 'react';
import { shallow } from 'enzyme';
import Map from '../Map';

describe('Map', () => {

    let mountedMap
    let props;

    beforeEach(() => {
        props = {
            location: undefined,
            imageName: 'testMap.png'
        }
        mountedMap = shallow(<Map {...props} />);
    });

    it('renders without crashing', () => {
        shallow(<Map />);
    });

    it('contains an image', () => {
        const images = mountedMap.find('img');
        expect(images.length).toBe(1);
    });

    it('displays the none map when no params are given', () => {
        mountedMap = shallow(<Map />);
        const defaultMap = mountedMap.find('img[src="images/none.png"]');
        expect(defaultMap.length).toBe(1);
    });

    it('displays the map imageName passed to it', () => {
        const testMap = mountedMap.find('img[src="images/testMap.png"]');
        expect(testMap.length).toBe(1)
    })

})