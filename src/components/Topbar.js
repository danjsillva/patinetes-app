import React, { Component } from 'react';
import { Platform, Dimensions, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window')

export default class Topbar extends Component {
    render() {
        return (
            <View style={styles.toolbar}>
                <TouchableOpacity style={styles.button}>
                    <Icon name="bars" size={18} />
                </TouchableOpacity>
                <View style={styles.title}>
                    <Text style={styles.titlePre}>MyLittle</Text>
                    <Text style={styles.titlePos}>Patinete</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={this.props.onCurrentLocationPress}>
                    <Icon name="map-marker" size={20} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    toolbar: {
        width: width - 20,
        marginHorizontal: 10,
        marginTop: Platform.select({ ios: 60, android: 40 }),
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#FFF',
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowOffset: { x: 0, y: 0 },
        shadowRadius: 5,
    },
    title: {
        marginTop: 1,
        flexDirection: 'row',
    },
    titlePre: {
        fontSize: 18,
    },
    titlePos: {
        fontSize: 18,
        fontWeight: '800',
    },
    button: {
        width: 24,
        height: 24,
        // backgroundColor: '#f00',
        alignItems: 'center',
        justifyContent: 'center',
    },
})