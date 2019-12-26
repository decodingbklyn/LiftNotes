import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ExerciseListScreen from './src/screens/ExerciseListScreen';
import WorkOutSessionScreen from './src/screens/WorkOutSessionScreen';

const navigator = createStackNavigator (
  {
  Home: {screen: HomeScreen},
  List: {screen: ExerciseListScreen},
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