import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Feed from '../screens/Feed';

import camera from '../../assets/camera.png';
import logo from '../../assets/logo.png';
import igtv from '../../assets/igtv.png';
import send from '../../assets/send.png';

const MainNavigator = createStackNavigator(
  {
    Feed
  }, 
  {
    defaultNavigationOptions: {
      headerTitle: () => <Image source={logo} />,
      headerLeft:() => (
        <TouchableOpacity>
          <Image source={camera}/>
        </TouchableOpacity>
      )
    }
  }
);

export default createAppContainer(MainNavigator);