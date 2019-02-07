import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView
} from 'react-native';

//import sve kategorije 
import SveKategorije from '../components/Ispis/SveKategorije';

class Categories extends React.Component {

    render() {
        return (
            <View>
                <SveKategorije />
            </View>
        );
    }
}

export default Categories;