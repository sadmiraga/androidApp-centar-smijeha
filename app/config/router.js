import React from 'react';
import { View, Text, Button } from "react-native";
import { createBottomTabNavigator, createStackNavigator } from "react-navigation";
import { Icon } from 'react-native-elements';

//TABS
//import Categories from '../tabs/categories'; NOT WORKING
import Home from '../tabs/home';
import Me from '../tabs/me';

//KATEGORIJE TABS
//vicevi po kategoriji
import ViceviPoKategoriji from '../components/Ispis/ViceviPoKategoriji';
//sve kategorije 
import SveKategorije from '../components/Ispis/SveKategorije';


//ME TABS 
import AdminPanel from '../tabs/me/adminPanel';
import Register from '../tabs/me/register';
import Login from '../tabs/me/login';
import SendJoke from '../tabs/me/sendJoke';



//ME STACK 
export const meStack = createStackNavigator({


    //POCETNI ME SCREEN 
    MeHome: {
        screen: Me,
        navigationOptions: {
            title: 'Moj Profil'
        }
    },


    //ADMIN PANEL
    AdminPanel: {
        screen: AdminPanel,
        navigationOptions: {
            title: 'Admin Panel'
        },
    },

    //REGISTER
    Register: {
        screen: Register,
        navigationOptions: {
            title: 'Registracija'
        },
    },

    //LOGIN 
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Prijava'
        },
    },

    //SEND JOKE
    SendJoke: {
        screen: SendJoke,
        navigationOptions: {
            title: 'Posaljite vic'
        }
    },


},
    {
        initialRouteName: "MeHome"
    },

);


//CATEGORIES STACK 
export const categoriesFeedStack = createStackNavigator({

    SveKategorije: {
        screen: SveKategorije,
        navigationOptions: {
            title: 'KATEGORIJE',
        },
    },

    ViceviPoKategoriji: {
        screen: ViceviPoKategoriji,
    }

});


//TABS
export const Tabs = createBottomTabNavigator({


    Categories: {
        screen: categoriesFeedStack,
        navigationOptions: {
            title: 'Kategorije',
            label: 'Kategorije',
            tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
        }

    },
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Pocetna',
            label: 'Kategorije',
            tabBarIcon: ({ tintColor }) => <Icon name="home" size={35} color={tintColor} />,
        }

    },
    Me: {
        screen: meStack,
        navigationOptions: {
            title: 'Profil',
            label: 'Kategorije',
            tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />,
        }
    },

},
    {
        initialRouteName: "Home",
        showIcon: true
    },

);
