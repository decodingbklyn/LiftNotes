import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ExerciseListScreen from './src/screens/ExerciseListScreen';
import LogWorkOutSessionScreen from './src/screens/LogWorkOutSessionScreen';
import BlogScreen from './src/screens/BlogScreen';
import WorkOutListScreen from './src/screens/WorkOutListScreen';
import TimerScreen from './src/screens/TimerScreen'

const navigator = createStackNavigator (
  	{
		Home: {screen: HomeScreen},
		EList: {screen: ExerciseListScreen},
		Log: {screen: LogWorkOutSessionScreen},
		Blog: {screen: BlogScreen },
		WList: {screen: WorkOutListScreen }, 
		Timer: {screen: TimerScreen}
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