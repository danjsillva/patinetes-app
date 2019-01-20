import React, { Component } from 'react';
import { Dimensions, StyleSheet, ScrollView, View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Card from './Card'

const { width, height } = Dimensions.get('window')

export default class Cardsbar extends Component {
    scrollToBegin = () => {
        this.scrollView.scrollTo({ x: 0, y: 0, animated: true })
    }

    render() {
        const { patinetes } = this.props

        return (
            <ScrollView
                ref={el => this.scrollView = el}
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
                {/* {patinetes.map((patinete, index, patinetes) => (
                    <Card
                        key={patinete.id}
                        currentPosition={false}
                        data={patinete}
                        index={index}
                        total={patinetes.length}
                        onPatineteSelected={this.props.onPatineteSelected}
                        onPatineteUnlock={this.props.onPatineteUnlock}
                    />
                ))} */}

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

                    <View style={styles.button}>
                        {patinetes.length > 0 ? (
                            <Text style={styles.buttonText}>Navegue e escolha uma das opções <Icon name="arrow-circle-right" size={14} /></Text>
                        ) : (
                                <Text style={styles.buttonText}>Tente novamente mais tarde</Text>
                            )}
                    </View>


                </View>

                {patinetes.map((patinete, index, patinetes) => (
                    <Card
                        key={patinete.id}
                        currentPosition={false}
                        data={patinete}
                        index={index}
                        total={patinetes.length}
                        onPatineteSelected={this.props.onPatineteSelected}
                        onPatineteUnlock={this.props.onPatineteUnlock}
                    />
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
        // width: '100%',
        maxHeight: 196,
    },
    card: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: width - 20,
        maxHeight: 200,
        backgroundColor: '#FFF',
        margin: 10,
        padding: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowOffset: { x: 0, y: 0 },
        shadowRadius: 5,
    },
    img: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    info: {
    },
    button: {
        width: width - 20,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        height: 48,
        // backgroundColor: '#000',
        position: 'absolute',
        bottom: 0,
    },
    buttonText: {
        // fontSize: 10,
        color: '#777',
    },
});
