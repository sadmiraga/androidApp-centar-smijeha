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
    renderIf,
} from 'react-native';
import { createStackNavigator, createAppContainer, StackNavigator, navigate, StackActions, NavigationActions, NavigationEvents } from 'react-navigation';

//import console = require('console');


export default class Me extends React.Component {

    //constructor
    constructor(props) {
        super(props);
        this.state = {
            loggedin: false,
            name: 'test',
        }
    }

    //componentDidMount = () => AsyncStorage.getItem('username').then((value) => this.setState({ 'name': value, loggedin: true }));

    async componentDidMount() {

        let value = await AsyncStorage.getItem('username');
        if (value != null) {

            var test = value;
            this.setState({
                name: value,
                loggedin: true
            });

            //console.warn(this.state.name);

        }

        //console.warn(this.state.loggedin);

    }



    //navigacija
    goOnLogin() {
        this.props.navigation.navigate('Login');
    }



    logoutFunction = async () => {
        AsyncStorage.clear();

        this.setState({
            loggedin: false,
            name: 'testLoggedOut'
        });

        this.componentDidMount();

    }




    //provjeriti da li je user prijavljen 
    /* async componentDidMount() {
        let user = await AsyncStorage.getItem('korisnik');

        if (user != null) {

            let parsed = JSON.parse(user);

            this.setState({
                loggedin: true,
                name: parsed.name,
            });
        }
    } */

    render() {



        return (
            <ScrollView>

                <NavigationEvents onDidFocus={() => this.componentDidMount()} />






                {this.state.loggedin != true ? <TouchableOpacity
                    onPress={() => this.goOnLogin()}
                >
                    <Text style={styles.dugme}> Prijava </Text>
                </TouchableOpacity> : null}


                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('SendJoke')}
                >
                    <Text style={styles.dugme}> Posaljite vic </Text>
                </TouchableOpacity>





                {this.state.loggedin ? <TouchableOpacity
                    onPress={this.logoutFunction}
                >
                    <Text style={styles.dugme}> Odjava </Text>
                </TouchableOpacity> : null}


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
        marginTop: '2%',
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderBottomColor: 'black'
    }

});