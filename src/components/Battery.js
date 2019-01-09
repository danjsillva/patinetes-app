import React, { Component } from 'react'
import { Platform, Dimensions, StyleSheet, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Battery extends Component {
  state = {
    name: '',
    color: ''
  }

  componentWillMount() {
    let name
    let color

    switch (true) {
      case this.props.data >= 95:
        name = 'battery-full'
        color = '#000'
        break;
      case this.props.data >= 75:
        name = 'battery-three-quarters'
        color = '#000'
        break;
      case this.props.data >= 50:
        name = 'battery-half'
        color = '#000'
        break;
      case this.props.data >= 20:
        name = 'battery-quarter'
        color = '#000'
        break;

      default:
        name = 'battery-empty'
        color = '#F00'
        break;
    }

    this.setState({ name, color })
  }

  render() {
    return (
        <Icon name={this.state.name} color={this.state.color} size={24}/>
    )
  }
}

const styles = StyleSheet.create({

});
