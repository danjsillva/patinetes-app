import React, { Component } from 'react';
import { Platform, Dimensions, StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window')

export default class Topbar extends Component {
    render() {
        return (
            <View style={styles.toolbar}>
                <Icon name="bars" size={18} style={{marginTop: 2}} />
                <View style={styles.title}>
                    <Text style={styles.titlePre}>MyLittle</Text>
                    <Text style={styles.titlePos}>Patinete</Text>
                </View>
                <Icon name="crosshairs" size={18} onPress={this.props.onCurrentLocationPress} style={{marginTop: 2}} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    toolbar: {
      width: width - 40,
      marginHorizontal: 20,
      marginTop: Platform.select({ ios: 60, android: 40 }),
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20,
      backgroundColor: '#FFF',
      elevation: 5,
      shadowColor: '#000',
      shadowOpacity: 0.5,
      shadowOffset: { x: 0, y: 0 },
      shadowRadius: 15,
    },
    title: {
      flexDirection: 'row',
    },
    titlePre: {
      fontSize: 18,
    },
    titlePos: {
      fontSize: 18,
      fontWeight: '800',
    }
})