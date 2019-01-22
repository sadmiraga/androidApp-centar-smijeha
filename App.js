import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

import SviVicevi from './app/components/Ispis/SviVicevi';
import Categorynavbar from './app/components/navbars/categoryNavbar';


export default class centarsmijeha extends Component {



  render() {

    return (
      <View>

        <Categorynavbar />
        <SviVicevi />
      </View>
    );
  }
}

AppRegistry.registerComponent('centarsmijeha', () => centarsmijeha);
