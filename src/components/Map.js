import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps'

import { getPixelSize } from '../utils'

import Directions from './Directions'

export default class Map extends Component {
    state = {
        duration: 0,
    }

    render() {
        const { patinetes, region, destination } = this.props
        const { duration } = this.state

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
                {destination && (
                    <Directions
                        origin={region}
                        destination={destination}
                        onReady={result => {
                            this.setState({ duration: Math.floor(result.duration) })                            

                            this.mapView.fitToCoordinates(result.coordinates, {
                                edgePadding: {
                                    top: getPixelSize(110),
                                    bottom: getPixelSize(190),
                                    left: getPixelSize(30),
                                    right: getPixelSize(30),
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
                        }}
                    >
                        {/* {duration != 0 && (
                            <View><Text>{duration}</Text></View>
                        )} */}
                    </Marker>
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
