import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, Button, TouchableOpacity, RefreshControl } from 'react-native';
import { createStackNavigator, createAppContainer, StackNavigator, navigate } from 'react-navigation';

export default class SveKategorije extends React.Component {

    //CONSTRUCTOR
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
            refreshing: false,
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

    //refreshing
    handleRefresh() {
        this.componentDidMount();

        this.setState({
            refreshing: false
        })
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


                    <View key={key} style={styles.container}>



                        <TouchableOpacity
                            style={styles.dugme}
                            onPress={() => this.props.navigation.navigate('ViceviPoKategoriji', { ID: val.id, naslov: val.categoryName, })}
                        >
                            <Text > {val.categoryName} </Text>
                        </TouchableOpacity>


                    </View>
                );

            });
            return (
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            onRefresh={() => this.handleRefresh()}
                            refreshing={this.state.refreshing}
                        />
                    }
                >

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
        width: '70%',
        marginRight: '15%',
        marginLeft: '15%',
    },
    item: {
        flex: 1,
        alignSelf: 'stretch',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderBottomColor: 'black'
    },
    dugme: {
        backgroundColor: '#00B2EE',
        alignSelf: 'stretch',
        textAlign: 'center',
        alignItems: 'center',
        color: 'white',
        width: '100%',
        marginTop: '2%',
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderBottomColor: 'black'
    }
});