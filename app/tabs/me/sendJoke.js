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
    Alert,
    Picker,
    ActivityIndicator,
    Keyboard
} from 'react-native';
import { createStackNavigator } from "react-navigation";

export default class SendJoke extends React.Component {

    //CONSTRUCTOR
    constructor(props) {
        super(props);
        this.state = {
            vic: '',
            kategorija: 'test',
            isLoading: true,
            dataSource: null,
        }
    }


    //loading data
    componentDidMount() {
        return fetch('http://centarsmijeha.com/api/allCategories')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.data,
                })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    //notifikacija da je vic poslan
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


    // funckija za praznjenje text inputa
    clearText() {
        this._textInput.setNativeProps({ text: ' ' });
    }

    //funkcija za slanje vica
    posalji($text, $kategorija) {
        fetch('http://centarsmijeha.com/api/sendJoke', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'jokeText': $text,
                'category_id': $kategorija
            })
        })

        this.setState({
            vic: ''
        })

        this.jokeSentNotification();

    }


    render() {

        // jos nije loadalo podatke
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator />
                </View>
            )
        } else {
            //loadani podatci EXECUTE

            let data = this.state.dataSource.map((val, key) => {

                // kategorije koje idu u dropdown
                return (
                    <Picker.Item key={key} label={val.categoryName} value={val.id} />
                );
            });

            //default RETURN
            return (



                <KeyboardAvoidingView
                    behavior="padding"
                >

                    <TextInput style={styles.unosTexta}

                        multiline={true}
                        placeholder='Text vaseg vica'
                        underlineColorAndroid='transparent'
                        onChangeText={(text) => this.setState({ vic: text })}
                        ref={component => this._textInput = component}
                        value={this.state.vic}

                    />

                    <Picker
                        mode="dropdown"
                        placeholder="Izaberite kategoriju"
                        note={false}
                        style={styles.dropDownMeni}
                        selectedValue={this.state.kategorija}
                        onValueChange={(ItemValue, itemIndex) => this.setState({ kategorija: ItemValue })}
                    >
                        {data}


                    </Picker>

                    <TouchableOpacity
                        onPress={() => this.posalji(this.state.vic, this.state.kategorija)}
                    >
                        <Text style={styles.posaljiDugme}> Posaljite </Text>
                    </TouchableOpacity>



                </KeyboardAvoidingView >

            );

        }


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
    },

    dropDownMeni: {
        backgroundColor: '#00B2EE',
        color: 'white',
        width: '70%',
        marginLeft: '15%',
        marginRight: '15%',
        marginTop: '2%',
    },

    container: {
        fontSize: 20,
    }


});
