import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './components/HomeScreen'
import DetailsScreen from './components/DetailsScreen'

export default class App extends Component<Props> {
  render() {
    return (
      <AppContainer />
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});