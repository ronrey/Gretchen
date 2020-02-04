import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
});

export default createAppContainer(AppNavigator);