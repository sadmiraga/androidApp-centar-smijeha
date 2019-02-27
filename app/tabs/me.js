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
    StyleSheet,
} from 'react-native';
import { createStackNavigator, createAppContainer, StackNavigator, navigate } from 'react-navigation';


export default class Me extends React.Component {

    render() {
        return (
            <ScrollView>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Login')}
                >
                    <Text style={styles.dugme}> Prijava </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Register')}
                >
                    <Text style={styles.dugme}> Registracija </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('SendJoke')}
                >
                    <Text style={styles.dugme}> Posaljite vic </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('AdminPanel')}
                >
                    <Text style={styles.dugme}> Admin Panel </Text>
                </TouchableOpacity>


            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({

    dugme: {
        backgroundColor: '#00B2EE',
        textAlign: 'center',
        color: 'white',
        width: '70%',
        marginLeft: '15%',
        marginRight: '15%',
        marginTop: '2%'
    }

});