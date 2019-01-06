import React, { Component } from 'react'
import { Platform, Dimensions, StyleSheet, View, ScrollView, Text } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

const { width, height } = Dimensions.get('window')

export default class App extends Component {
  state = {
    latitude: -14.8643003,
    longitude: -40.8459176,
    patinetes: [
      { id: 3, code: 661328724, busy: true, battery: 17, latitude: -14.876026, longitude: -40.815568 },
      { id: 2, code: 778123009, busy: false, battery: 98, latitude: -14.844591, longitude: -40.838629 },
      { id: 4, code: 761326718, busy: false, battery: 52, latitude: -14.850392, longitude: -40.853703 },
      { id: 1, code: 980123765, busy: false, battery: 69, latitude: -14.859466, longitude: -40.827552 },
      { id: 5, code: 809662711, busy: true, battery: 36, latitude: -14.841416, longitude: -40.877323 },
    ]
  }

  render() {
    let { latitude, longitude, patinetes } = this.state

    return (
      <View style={styles.container}>
        <MapView
          ref={map => this.mapView = map}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0055,
            longitudeDelta: 0.0055,
          }}
          rotateEnabled={false}
          scrollEnabled={false}
          zoomEnabled={false}
          style={styles.mapView}>
          {patinetes.map(patinete => (
            <Marker
              ref={mark => patinete.mark = mark}
              key={patinete.id}
              // title={patinete.code}
              // description={patinete.busy}
              coordinate={{
                latitude: patinete.latitude, longitude: patinete.longitude
              }} />
          ))}
        </MapView>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onMomentumScrollEnd={e => {
            const scrolled = e.nativeEvent.contentOffset.x
            const patineteIndex = scrolled > 0 ? scrolled / Dimensions.get('window').width : 0
            const { latitude, longitude, mark } = this.state.patinetes[patineteIndex]

            this.mapView.animateToCoordinate({
              latitude,
              longitude
            }, 500);

            setTimeout(() => {
              mark.showCallout();
            }, 500)
          }} style={styles.cardList}>
          {patinetes.map((patinete, index, patinetes) => (
            <View
              key={patinete.id}
              style={styles.card}>
              <Text>{index + 1}/{patinetes.length}</Text>
              <Text>{patinete.code}</Text>
              <Text>{patinete.busy}</Text>
              <Text>{patinete.battery}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  mapView: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  cardList: {
    width: '100%',
    maxHeight: 200,
  },
  card: {
    width: width - 40,
    maxHeight: 200,
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 20,
    borderRadius: 10,
  }
});
