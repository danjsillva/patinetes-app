import React, { Component } from 'react'
import { Dimensions, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import Battery from './Battery'

const { width, height } = Dimensions.get('window')

export default class Card extends Component {
  render() {
    const { data, index, total } = this.props

    return (
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.icon}>
            <Image
              source={require('../assets/banner.jpg')}
              style={styles.img}
            />
            {/* <Icon name="map-marker" size={56} /> */}
          </View>

          <View style={styles.content}>
            <View style={styles.titlebar}>
              {/* <Text>{index + 1}/{total}</Text> */}
              <Text style={styles.title}>{data.code}</Text>
              <Battery data={data.battery} />
            </View>

            <View style={styles.info}>
              <TouchableOpacity style={styles.link} onPress={() => this.props.onPatineteSelected(data.latitude, data.longitude)} >
                <Text style={styles.linkText}>MOSTRAR ROTAS ATÉ AQUI</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => this.props.onPatineteUnlock(data.latitude, data.longitude)} >
          <Text style={styles.buttonText}>DESBLOQUEAR ESTE PATINETE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    // flexDirection: 'row',
    alignItems: 'flex-start',
    width: width - 20,
    maxHeight: 200,
    backgroundColor: '#FFF',
    margin: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { x: 0, y: 0 },
    shadowRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    padding: 10,
    marginTop: 10,
  },
  icon: {
    marginRight: 20,
  },
  // img: {
  //   width: 69,
  //   height: 64,
  //   // borderRadius: 32,
  //   marginBottom: 10,
  // },
  img: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
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
    marginBottom: 10,
  },
  link: {
    alignItems: 'center',
    paddingVertical: 4,
    backgroundColor: '#f5f5f5',
  },
  linkText: {
    fontSize: 12,
  },
  button: {
    width: width - 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    backgroundColor: '#000',
    // backgroundColor: '#007aff',
    position: 'absolute',
    // marginTop: 30,
    bottom: 0
  },
  buttonText: {
    color: '#fff',
  },
});
