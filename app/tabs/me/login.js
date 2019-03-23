import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    Button,
    TextInput,
    KeyboardAvoidingView,
    AsyncStorage,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { createStackNavigator } from "react-navigation";
import { ThemeConsumer } from 'react-native-elements';



export default class Login extends React.Component {

    //CONSTRUCTOR
    constructor(props) {
        super(props);
        this.state = {
            email: 'sadmirvela@gmail.com',
            password: 'mlijeko123',
            loginCheckExist: 'no',
            userID: 0,
            role: 0,
            name: 'testAPI',
        }
    }





    //login check preko POST API
    loginCheck() {
        fetch('http://centarsmijeha.com/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'email': this.state.email,
                'password': this.state.password
            })
        }).then(response => response.json())
            .then(response => {
                //postavljanje nove vrijednosti
                this.setState({
                    loginCheckExist: response.exist,
                    userID: response.id,
                    role: response.role,
                    name: response.name
                }, () => console.log(this.state.loginCheckExist + "\n" + this.state.userID + "\n" + this.state.role + "\n" + this.state.name));

            })

        //postavljanje vrijednosti u async
        let user = {
            name: this.state.name,
            ID: this.state.userID,
            userRole: this.state.role,
        }

        //postaviti vrijednosti u ASYNC
        AsyncStorage.setItem('korisnik', JSON.stringify(user));


    }




    render() {

        return (
            <ScrollView>

                <Text> {this.state.name} </Text>


                <TextInput style={styles.unosTexta}

                    placeholder='Unesite vas e-mail'
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                />

                <TextInput style={styles.unosTexta}

                    placeholder='Unesite vas password'
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                />

                <TouchableOpacity
                    onPress={() => this.loginCheck()}
                >
                    <Text style={styles.posaljiDugme}> Prijava </Text>
                </TouchableOpacity>


            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({

    unosTexta: {
        backgroundColor: '#00BFFF',
        width: '70%',
        marginLeft: '15%',
        marginRight: '15%',
        marginTop: '2%',
    },
    posaljiDugme: {
        backgroundColor: '#00B2EE',
        textAlign: 'center',
        color: 'white',
        width: '70%',
        marginLeft: '15%',
        marginRight: '15%',
        marginTop: '2%'
    },
});


