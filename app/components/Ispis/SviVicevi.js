import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
export default class SviVicevi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
        }
    }
    componentDidMount () {
        return fetch('http://centarsmijeha.com/api/apiJokes')
            .then ( (response) => response.json() )
            .then( (responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.allJokes,
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
            let allJokes = this.state.dataSource.map((val, key) => {
                return <View key={key} style={styles.item}>
                <Text>{val.jokeText}</Text>
                </View>
            });
            return (
                <View style={styles.container}>
                    
                    {allJokes}
                </View>
            );
        }
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        flex: 1,
        alignSelf: 'stretch',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    }
});