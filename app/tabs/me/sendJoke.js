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
    Alert
} from 'react-native';
import { createStackNavigator } from "react-navigation";




function konzola() {
    console.log('TES TEST TEST');
}




export default class SendJoke extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            vic: ''
        }
    }

    testKonzola() {
        console.warn('BRIJAAAA');
    }


    jokeSentNotification() {
        Alert.alert(
            "Vic poslan",
            "Vaš vic je poslan, prije nego što vic bude objavljen potrebno je da bude odobren od strane admina.",
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );

    }





    clearText() {
        this._textInput.setNativeProps({ text: ' ' });
    }

    posalji($text) {
        fetch('http://centarsmijeha.com/api/sendJoke', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'jokeText': $text
            })
        })

        this.setState({
            vic: ''
        })

        this.jokeSentNotification();

    }


    render() {
        return (



            <KeyboardAvoidingView

                behavior="padding"
            >

                <TextInput style={styles.unosTexta}
                    placeholder='Text vaseg vica'
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setState({ vic: text })}
                    ref={component => this._textInput = component}
                    value={this.state.vic}

                />

                <TouchableOpacity
                    onPress={() => this.posalji(this.state.vic)}
                >
                    <Text style={styles.posaljiDugme}> Posaljite </Text>
                </TouchableOpacity>



            </KeyboardAvoidingView>

        );
    }
}

//CSS 
const styles = StyleSheet.create({
    unosTexta: {
        backgroundColor: '#00BFFF',
        width: '70%',
        marginLeft: '15%',
        marginRight: '15%'

    },

    posaljiDugme: {
        backgroundColor: '#00B2EE',
        textAlign: 'center',
        color: 'white',
        width: '70%',
        marginLeft: '15%',
        marginRight: '15%',
        marginTop: '2%'
    }


});
