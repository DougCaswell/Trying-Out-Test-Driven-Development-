import React, { Component } from 'react';
import './Map.css';
import { NONAME } from 'dns';

class Map extends Component {
    render() {
        let imagePath = `images/${this.props.imageName || 'none.png'}`;
        let altTag = this.props.location || 'All Locations';
        return (
            <div className='MapBox'>
                <img src={imagePath} alt={altTag} />
            </div>
        );
    }
}

export default Map