import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps'

import Directions from './Directions'

export default class Map extends Component {
    state = {
        
    }

    render() {
        const { patinetes, region, destination } = this.props

        return (
            <MapView
                ref={el => this.mapView = el}
                region={region}
                showsUserLocation
                loadingEnabled
                // rotateEnabled={false}
                // scrollEnabled={false}
                // zoomEnabled={false}
                style={styles.mapView}
            >
                { destination && (
                    <Directions
                        origin={region}
                        destination={destination}
                        onReady={result => {
                            this.mapView.fitToCoordinates(result.coordinates, {
                                edgePadding: {
                                    top: 110,
                                    bottom: 190,
                                    left: 30,
                                    right: 30,
                                }
                            })
                        }}
                    />
                )}

                {patinetes.map(patinete => (
                    <Marker
                        ref={el => patinete.mark = el}
                        key={patinete.id}
                        // title={patinete.code}
                        // description={patinete.busy}
                        coordinate={{
                            latitude: patinete.latitude, longitude: patinete.longitude
                        }} />
                ))}
            </MapView>
        );
    }
}

const styles = StyleSheet.create({
    mapView: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
});
