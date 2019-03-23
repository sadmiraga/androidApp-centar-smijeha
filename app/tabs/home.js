import React, { Component } from 'react';
import { Text, View, ScrollView, AsyncStorage } from 'react-native';

//svi vicevi 
import SviVicevi from '../components/Ispis/SviVicevi';

class Home extends React.Component {

    render() {


        return (
            <View>
                <SviVicevi />
            </View>
        );
    }
}

export default Home;