import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import WorkOutListScreen from './src/screens/WorkOutListScreen';


const navigator = createStackNavigator (
  {
  Home: {screen: HomeScreen},
  List: {screen: WorkOutListScreen}
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