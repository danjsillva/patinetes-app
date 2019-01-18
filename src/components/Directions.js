import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ origin, destination, onReady }) => (
    <MapViewDirections
        origin={origin}
        destination={destination}
        onReady={onReady}
        apikey='AIzaSyBIz7l7_a-x-J5lxzjR7-s2S6QTiAkjsg0'
        strokeWidth={3}
        strokeColor='#222'
    />
);

export default Directions;
