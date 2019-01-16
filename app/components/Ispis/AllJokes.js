import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, } from 'react-native';
export default class Alljokes extends React.Component {

    constructor() {
        super()
        this.state = {
            dataSource: []
        }
    }



    renderItem = ({ item }) => {
        _keyExtractor = (item, index => item.id);
        return (
            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10 }}>
                <Text>LIKE</Text>
                <View style={{ flex: 1, justifyContent: 'center', fontSize: 18, marginBottom: 25 }}>
                    <Text>
                        {item.jokeText}
                    </Text>
                </View>
            </View>
        )
    }

    componentDidMount() {
        const url = 'http://centarsmijeha.com/api/help'
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: responseJson.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }


    render() {

        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={this.renderItem}
                    keyExtractor={this._keyExtractor}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

});