import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import Map from './components/Map'
import Topbar from './components/Topbar'
import Cardsbar from './components/Cardsbar'
import Scanner from './components/Scanner'

export default class App extends Component {
  state = {
    region: null,
    destination: null,
    patinetes: [
      { id: 3, code: 661328724, busy: true, battery: 17, latitude: -14.876026, longitude: -40.815568 },
      { id: 2, code: 778123009, busy: false, battery: 98, latitude: -14.844591, longitude: -40.838629 },
      { id: 4, code: 761326718, busy: false, battery: 52, latitude: -14.850392, longitude: -40.853703 },
      { id: 1, code: 980123765, busy: false, battery: 69, latitude: -14.859466, longitude: -40.827552 },
      { id: 5, code: 809662711, busy: true, battery: 36, latitude: -14.841416, longitude: -40.877323 },
    ],
    openQRCodeScanner: false,
  }

  componentDidMount() {
    this.handleCurrentLocationShow()
  }

  handleCurrentLocationPress = () => {
    this.cardsbar.scrollToBegin()
    this.handleCurrentLocationShow()
  }

  handleCurrentLocationShow = () => {
    this.setState({ destination: null })
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        this.setState({ region: { latitude, longitude, latitudeDelta: 0.0055, longitudeDelta: 0.0155 } })
      },
      (error) => alert('Não foi possível determinar sua localização.'),
      {
        timeout: 2000,
        enableHighAccuracy: true,
        maximumAge: 1000,
      }
    );
  }

  handlePatineteShow = (latitude, longitude) => {
    this.setState({ region: { latitude, longitude, latitudeDelta: 0.0055, longitudeDelta: 0.0155 } })
    this.setState({ destination: null })
  }

  handlePatineteSelected = (latitude, longitude) => {
    this.handleCurrentLocationShow()
    this.setState({ destination: { latitude, longitude, title: 'teste' } })
  }

  handlePatineteUnlock = () => {
    this.setState({ openQRCodeScanner: true })
  }

  handleCodeLoaded = (e) => {
    // alert(e.data)
    this.setState({ openQRCodeScanner: false })
  }

  handleCancel = () => {
    this.setState({ openQRCodeScanner: false })
  }

  render() {
    let { patinetes, region, destination, openQRCodeScanner } = this.state

    return (
      <View style={styles.container}>
        <Map ref={el => this.mapView = el} patinetes={patinetes} region={region} destination={destination} />

        <Topbar onCurrentLocationPress={this.handleCurrentLocationPress} />

        <Scanner onCodeLoaded={this.handleCodeLoaded} onCancel={this.handleCancel} modalVisible={openQRCodeScanner}/>

        <Cardsbar
          ref={el => this.cardsbar = el}
          patinetes={patinetes}
          onCurrentLocationShow={this.handleCurrentLocationShow}
          onPatineteShow={this.handlePatineteShow}
          onPatineteSelected={this.handlePatineteSelected}
          onPatineteUnlock={this.handlePatineteUnlock}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});
