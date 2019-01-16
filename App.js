import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

import SviVicevi from './app/components/Ispis/SviVicevi';
import Alljokes from './app/components/Ispis/AllJokes';
import Index from './app/components/index';

export default class centarsmijeha extends Component {



  render() {

    return (
      <View>


        <SviVicevi />
      </View>
    );
  }
}

AppRegistry.registerComponent('centarsmijeha', () => centarsmijeha);