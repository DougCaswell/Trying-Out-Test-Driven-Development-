import React from 'react';
import { shallow } from 'enzyme';
import StoreLocator from '../StoreLocator';
import axios from 'axios';

describe("StoreLocator", function () {

    let mountedStoreLocator;

    beforeEach(() => {
        mountedStoreLocator = shallow(<StoreLocator />);
    })

    it('calls axios.get in #componentDidMount', () => {
        return mountedStoreLocator.instance().componentDidMount().then(() => {
            expect(axios.get).toHaveBeenCalled();
        });
    })

    it('calls axios.get with correct url', () => {
        return mountedStoreLocator.instance().componentDidMount().then(() => {
            expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/data/shops.json');
        });
    })

    it('updates state with api data', () => {
        return mountedStoreLocator.instance().componentDidMount().then(() => {
            expect(mountedStoreLocator.state()).toHaveProperty('shops', [
                {
                    "location": "test location",
                    "address": "123 Portland Dr"
                }
            ]);
        });
    })

    it('Shallow rendering of StoreLocator should work', () => {
        let mountedStoreLocator = shallow(<StoreLocator />);
    });

    it('renders a header', () => {
        const headers = mountedStoreLocator.find('Header');
        expect(headers.length).toBe(1);
    });

    // it('renders three buttons', () => {
    //     const buttons = mountedStoreLocator.find('Button');
    //     expect(buttons.length).toBe(3);
    // })

    it('renders a map', () => {
        const maps = mountedStoreLocator.find('Map');
        expect(maps.length).toBe(1);
    })

})

describe('chooseMap', () => {
    it('updates this.state.currentMap using the loaction passed to it', () => {
        let mountedStoreLocator = shallow(<StoreLocator />);
        let mockEvent = { target: { value: 'testland' } }
        mountedStoreLocator.instance().chooseMap(mockEvent);
        expect(mountedStoreLocator.instance().state.currentMap).toBe('testland.png')
    })
})