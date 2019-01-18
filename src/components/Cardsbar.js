import React, { Component } from 'react';
import { Dimensions, StyleSheet, ScrollView, View, Image, Text } from 'react-native';

import Card from './Card'

const { width, height } = Dimensions.get('window')

export default class Cardsbar extends Component {
    render() {
        const { patinetes } = this.props

        return (
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onMomentumScrollEnd={e => {
                    const scrolled = e.nativeEvent.contentOffset.x
                    const patineteIndex = scrolled > 0 ? (scrolled / width) - 1 : -1

                    if (patineteIndex == -1) {
                        this.props.onCurrentLocationShow()
                    } else {
                        const { latitude, longitude, mark } = patinetes[patineteIndex]

                        this.props.onPatineteShow(latitude, longitude)

                        setTimeout(() => {
                            mark.showCallout();
                        }, 500)
                    }

                }} style={styles.cardList}
            >

                <View style={styles.card}>
                    <Image
                        source={require('../assets/banner.jpg')}
                        style={styles.img}
                    />
                    
                    {patinetes.length > 0 ? (
                        <Text style={styles.info}>Encontramos {patinetes.length} patinetes na sua região</Text>
                    ) : (
                        <Text style={styles.info}>Nenhum patinete na sua região</Text>
                    )}

                    <View style={styles.line}></View>

                    {patinetes.length > 0 ? (
                        <Text style={styles.hint}>Navegue entre as opções e escolha o mais próximo de você</Text>
                    ) : (
                        <Text style={styles.hint}>Tente novamente mais tarde</Text>
                    )}

                </View>

                {patinetes.map((patinete, index, patinetes) => (
                    <Card key={patinete.id} currentPosition={false} data={patinete} index={index} total={patinetes.length} onPatineteSelected={this.props.onPatineteSelected} />
                ))}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    cardList: {
        width: '100%',
        maxHeight: 196,
    },
    card: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: width - 40,
        maxHeight: 200,
        backgroundColor: '#FFF',
        marginHorizontal: 20,
        marginVertical: 20,
        padding: 20,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowOffset: { x: 0, y: 0 },
        shadowRadius: 15,
    },
    img: {
        width: 64,
        height: 64,
        borderRadius: 32,
        marginBottom: 10,
    },
    info: {
    },
    line: {
        width: width - 40,
        marginHorizontal: 20,
        marginVertical: 5,
        borderBottomWidth: 3,
        borderBottomColor: '#eee'
    },
    hint: {
        marginTop: 8,
        fontSize: 10,
        color: '#777',
    },
});
