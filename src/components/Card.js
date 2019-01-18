import React, { Component } from 'react'
import { Platform, Dimensions, StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import Battery from './Battery'

const { width, height } = Dimensions.get('window')

export default class Card extends Component {
  render() {
    const { data, index, total } = this.props

    return (
      <View style={styles.card}>
        <View style={styles.icon}>
          <Icon name="map-marker" size={48} />
        </View>

        <View style={styles.content}>
          <View style={styles.titlebar}>
            <Text style={styles.title}>{data.code}</Text>
            <Battery data={data.battery} />
          </View>

          <View style={styles.info}>
            <Text>{index + 1}/{total}</Text>
            <Text>{data.busy}</Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={() => this.props.onPatineteSelected(data.latitude, data.longitude)} >
            <Text style={styles.buttonText}>SELECIONAR ESTE PATINETE</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: width - 40,
    maxHeight: 200,
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { x: 0, y: 0 },
    shadowRadius: 15,
  },
  icon: {
    marginRight: 20,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    // borderWidth: 2,
  },
  titlebar: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 18,
  },
  info: {

  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 32,
    backgroundColor: '#007aff',
    marginTop: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
});
