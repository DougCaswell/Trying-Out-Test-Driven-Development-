import React, { Component } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Map from '../components/Map';
import mapChooser from '../mapChooser';
import Axios from 'axios';

class StoreLocator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentMap: 'none.png',
            shops: []
        }

        this.chooseMap = this.chooseMap.bind(this);
    }

    async componentDidMount() {
        let response = await Axios.get('http://localhost:3000/data/shops.json');
        console.log(response)
        this.setState({
            shops: response.data.shops
        })
    }

    chooseMap(e) {
        this.setState({ currentMap: mapChooser(e.target.value) });
    }

    render() {
        console.log(this.state.shops)

        let storeButtons = this.state.shops.map((shop, id) => {
            return (<Button handleClick={this.chooseMap} location={shop.location} key={id} />);
        });

        return (
            <div className='StoreLocator'>
                <Header />
                <div className='buttonContainer'>
                    {storeButtons}
                </div>
                <Map imageName={this.state.currentMap} />
            </div>
        );
    }
}

export default StoreLocator;