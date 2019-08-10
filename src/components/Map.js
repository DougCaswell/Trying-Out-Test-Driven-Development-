import React, { Component } from 'react';
import './Map.css';

class Map extends Component {
    render() {
        let imagePath = `images/${this.props.imageName || 'none.png'}`;
        let storeName = imagePath.slice(7, imagePath.length - 4) + '\'s shop';

        if (storeName === 'none\'s shop') { storeName = 'All shops' }

        let altTag = `Map of ${storeName}`

        return (
            <div className='MapBox'>
                <img src={imagePath} alt={altTag} />
            </div>
        );
    }
}

export default Map