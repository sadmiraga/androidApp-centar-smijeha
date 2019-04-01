import React from 'react';
import {
    StyleSheet,
    AsyncStorage,
    Text,
    View,
    ActivityIndicator,
    ScrollView,
    RefreshControl,
    TouchableOpacity,
    Alert
} from 'react-native';
import { NavigationEvents } from 'react-navigation';
export default class Svivicevi extends React.Component {

    //CONSTRUCTOR
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
            refreshing: false,
            showLikes: false,
            userId: 1,
        }
    }

    //loading data
    async componentDidMount() {


        //check if user is logged in 
        let value = await AsyncStorage.getItem('userID');

        if (value != null) {
            this.setState({
                showLikes: true,
                userId: value,
            });
        }


        //console.warn(this.state.showLikes);

        //get All jokes
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



    async likeFunction(jokeID) {

        //get user data
        let value = await AsyncStorage.getItem('userID');

        if (value != null) {
            this.setState({
                showLikes: true,
                userId: value
            });
        } else {
            this.setState({
                showLikes: false,
                userId: 1
            })
        }


        //check if user is logged in 
        if ((this.state.userId) == 1) {

            Alert.alert(
                'Sviđa mi se',
                "Morate se prijaviti da bi viceve označavali sa 'sviđa mi se' ",
                [
                    { text: 'Ok', onPress: () => console.log('ok Pressed') },
                    //MeHome
                ],
                { cancelable: false },
            );
        } else {
            //USER IS LOGGED IN 
            //EXECUTE LIKE FUNCTION 

            fetch('http://centarsmijeha.com/api/like', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'userID': this.state.userId,
                    'jokeID': jokeID
                })
            }).then(response => response.json())
                .then(response => {

                    Alert.alert(
                        'Sviđa mi se',
                        response.message,
                        [
                            { text: 'Ok', onPress: () => console.log('ok Pressed') },
                            //MeHome
                        ],
                        { cancelable: false },
                    );

                })

            //kraj else
        }


        //kraj funkcije
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

                return <View key={key} style={styles.item}>

                    <Text>{val.jokeText}</Text>

                    <TouchableOpacity
                        onPress={() => this.likeFunction(val.id)}
                    >
                        <Text style={styles.likeButton} >
                            Sviđa mi se
                        </Text>
                    </TouchableOpacity>


                </View>

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
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderBottomColor: 'black'
    },
    likeButton: {
        backgroundColor: '#00B2EE',
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 1,
    }
});