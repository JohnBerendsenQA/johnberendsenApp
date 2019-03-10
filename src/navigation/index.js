import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  StatusBar,
  Text,
  View
} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { Provider } from 'react-redux';

import Colors from '../constants/Colors';

import SearchScreen from '../screens/SearchScreen';
import StoriesScreen from '../screens/StoriesScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import HistoryScreen from '../screens/HistoryScreen';
import SettingsScreen from '../screens/SettingsScreen';

import store from '../store';
import { connect } from 'react-redux';
import getDefaultTab from '../actions/ModifySettingsActions';


const MainNavigator = StackNavigator({
    Root: {
           screen: TabNavigator({
              search: { screen: SearchScreen },
              stories: { screen: StoriesScreen },
              favourites: {
                  screen: FavouritesScreen,
                  navigationOptions: {
                    tabBarLabel: 'FAVS',
                    tabBarIcon: ({ tintColor, focused }) => (
                        <Icon
                            name={'favorite'}
                            size={24}
                            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                          />
                      ),
                    }
               },
              history: {
                  screen: HistoryScreen,
                  navigationOptions: {
                      tabBarLabel: 'HISTORY',
                      tabBarIcon: ({ tintColor, focused }) => (
                          <Icon
                            name={'watch-later'}
                            size={24}
                            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                          />
                      ),
                  }
              },
              settings: { screen: SettingsScreen.SettingsScreen },
          },
          {
              tabBarOptions: {
                 activeTintColor: Colors.tintColor,
                 showLabel: true,
                 showIcon: true,
                 indicatorStyle: {
                     backgroundColor: 'transparent'
                 },
                 labelStyle: { 
                     fontSize: 8 
                 }, 
                 iconStyle: {
                     width: 24,
                     height: 24
                 },
                 style: {
                  backgroundColor: 'black',
                 },
                 tabBarIcon: ({ tintColor }) => {Colors.darkTintColor}
              },
              lazy: true,
              tabBarPosition: 'bottom',
              initialRouteName: 'stories'
          }),
      },
    defaultTabSetting: {
        screen: SettingsScreen.DefaultTabSetting,
    },
    readabilitySetting: {
        screen: SettingsScreen.ReadabilitySetting,
    },
    regionSetting: {
        screen: SettingsScreen.RegionSetting,
    },
    sourcesSetting: {
        screen: SettingsScreen.SourcesSetting,
    }

})

export default MainNavigator;
