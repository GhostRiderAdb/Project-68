import React,{Component} from 'react';
import { View,Text } from 'react-native';
import Facebook from './screens/fb';
import Instagram from './screens/in';

import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation'

export default class App extends Component{
    render(){
        return(
           <AppContainer/>
        )
    }
}

const TabNavigator = createBottomTabNavigator({
    Facebook : {screen : Facebook},
    Instagram : {screen : Instagram}
})

const AppContainer = createAppContainer(TabNavigator)
