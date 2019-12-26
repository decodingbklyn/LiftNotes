import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import WorkOutListScreen from './src/screens/WorkOutListScreen';
import WorkOutSessionScreen from './src/screens/WorkOutSessionScreen';

const navigator = createStackNavigator (
  {
  Home: {screen: HomeScreen},
  List: {screen: WorkOutListScreen},
  Session: {screen: WorkOutSessionScreen}
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'LiftNotes'
    }
  }
);

const App = createAppContainer(navigator);

export default App;