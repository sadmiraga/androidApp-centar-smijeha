import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, RefreshControl } from 'react-native';
export default class Svivicevi extends React.Component {

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
        return fetch('http://centarsmijeha.com/api/help')
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

                return <View key={key} style={styles.item}><Text>{val.jokeText}</Text></View>

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
        marginTop: 50,
        marginRight: '15%',
        marginLeft: '15%',
        width: '70%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    }
});