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
import { createStackNavigator } from "react-navigation";




function konzola() {
    console.log('TES TEST TEST');
}




export default class SendJoke extends React.Component {

    testKonzola() {
        console.warn('BRIJAAAA');
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
    }


    render() {
        return (



            <View>

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
                    <Text> Posaljite </Text>
                </TouchableOpacity>


            </View>

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

    }


});
