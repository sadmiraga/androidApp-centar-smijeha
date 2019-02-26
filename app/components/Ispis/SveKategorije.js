import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, Button, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer, StackNavigator, navigate } from 'react-navigation';

export default class SveKategorije extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null
        }
    }




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
    render() {

        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator />
                </View>
            )
        } else {
            let data = this.state.dataSource.map((val, key) => {



                return (


                    <View key={key} style={styles.item}>



                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('ViceviPoKategoriji', { ID: val.id, naslov: val.categoryName, })}
                        >
                            <Text> {val.categoryName} </Text>
                        </TouchableOpacity>


                    </View>
                );

            });
            return (
                <ScrollView>

                    {data}
                </ScrollView >
            );
        }
    }
}




//CSS
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    item: {
        flex: 1,
        alignSelf: 'stretch',
        width: '100%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }
});