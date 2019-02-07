import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    Button
} from 'react-native';
import { createStackNavigator } from "react-navigation";


class Me extends React.Component {

    render() {
        return (
            <View>
                <Text>
                    Moj Profil
                </Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Omeni')}
                    title="OK"
                />
            </View>
        );
    }
}

class Omeni extends React.Component {

    render() {
        return (
            <View>
                <Text>
                    O meni
          </Text>
            </View>
        );
    }
}

export default BRUDA = createStackNavigator({

    ME: {
        screen: Me,
    },

    Omeni: {
        screen: Omeni,
    },

});
