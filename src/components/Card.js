import React, { Component } from 'react'
import { Platform, Dimensions, StyleSheet, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import Battery from './Battery'

const { width, height } = Dimensions.get('window')

export default class Card extends Component {
  render() {
    return (
      <View
        key={this.props.data.id}
        style={styles.card}>

        <View style={styles.icon}>
          <Icon name="map-marker" size={48} />
        </View>

        <View style={styles.content}>
          <View style={styles.titlebar}>
            <Text style={styles.title}>{this.props.data.code}</Text>
            <Battery data={this.props.data.battery} />
          </View>
            {/* <Text>{this.props.data.battery}</Text> */}

          <View style={styles.info}>
            <Text>{this.props.index + 1}/{this.props.length}</Text>
            <Text>{this.props.data.busy}</Text>
          </View>
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
    // borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0 },
  },
  icon: {
    marginRight: 20,
  },
  content: {
    flex: 1,
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
});
