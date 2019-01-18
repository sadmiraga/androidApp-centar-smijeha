import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default class Categorynavbar extends Component {

    render() {
        return (
            <View style={styles.container}>



                <View style={styles.pictureContainer}>
                    <Image style={styles.picture} source={require('../../../images/logo.png')} />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        color: 'red',
        backgroundColor: 'white',
        height: '15%',
        width: '100%',
        flexDirection: 'row',
    },

    picture: {
        width: '100%',
        height: '100%',

    },
    buttonContainer: {
        width: '10%',
        height: '15%',
    },
    pictureContainer: {
        width: '30%',
        marginRight: '35%',
        marginLeft: '35%'
    },
    dugme: {
        height: '100%',
    }
});