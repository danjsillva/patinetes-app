import React, { Component } from 'react';
import { StyleSheet, View, Modal, Text, TouchableOpacity } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner';

import Topbar from './Topbar'

export default class Scanner extends Component {
    render() {
        return (
            <Modal
                animationType="slide"
                visible={this.props.modalVisible}
            >
                <View style={styles.container}>
                    <QRCodeScanner
                        onRead={this.props.onCodeLoaded.bind(this)}
                        showMarker
                        topContent={
                            <View style={styles.title}>
                                <Text style={styles.titlePre}>MyLittle</Text>
                                <Text style={styles.titlePos}>Patinete</Text>
                            </View>
                        }
                        bottomContent={
                            <View style={styles.bottomContent}>
                                <View style={styles.info}>
                                    <Text style={styles.infoText}>Aponte a camera para o código QR, após a verificação o patinete será liberado.</Text>
                                </View>
                                <TouchableOpacity style={styles.link} onPress={this.props.onCancel}>
                                    <Text style={styles.linkText}>CANCELAR</Text>
                                </TouchableOpacity>
                            </View>
                        }
                        style={styles.camera}
                    />
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    topContent: {
        flex: 1,

    },
    bottomContent: {
        flex: 1,
        alignItems: 'center'
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
    info: {
        margin: 20,
    },
    infoText: {
        textAlign: 'center'
    },
    camera: {

    },
    link: {
        width: 128,
        alignItems: 'center',
        paddingVertical: 4,
        paddingHorizontal: 20,
        backgroundColor: '#f5f5f5',
    },
    linkText: {
        fontSize: 12,
    },
});
