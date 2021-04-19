import React from 'react';
import {Image} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ExchangeScreen from '../screens/ExchangeScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
export const AppTabNavigator = createBottomTabNavigator({
    Home : {
        screen: HomeScreen,
        navigationOptions: {
            tabBarIcon: <Image source={require("../assets/h.png")} style={{width:20,height:20}} />,
            tabBarLabel: 'Home',
        }
    },
    Exchange: {
        screen: ExchangeScreen,
        navigationOptions :{
            tabBarIcon: <Image source={require("../assets/exchange.png")} style={{width:20,height:20}} />,
            tabBarLabel: 'Exchange',
        }
    }
});