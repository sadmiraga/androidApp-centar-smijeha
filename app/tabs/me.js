import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    Button,
    TextInput,
    KeyboardAvoidingView,
    AsyncStorage,
    TouchableOpacity,
} from 'react-native';
import { createStackNavigator, createAppContainer, StackNavigator, navigate } from 'react-navigation';


export default class Me extends React.Component {

    render() {
        return (
            <View>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Login')}
                >
                    <Text> Prijava </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Register')}
                >
                    <Text> Registracija </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('SendJoke')}
                >
                    <Text> Posaljite vic </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('AdminPanel')}
                >
                    <Text> Admin Panel </Text>
                </TouchableOpacity>


            </View>
        );
    }
}


