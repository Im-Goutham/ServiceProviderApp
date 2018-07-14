import { StackNavigator } from 'react-navigation';

import AppIntroScreen from '../screens/AppIntroScreen';
import LoginScreen from '../screens/LoginScreen';
import AppTabNavigator from './AppTabNavigator';


export default StackNavigator(
  {
    appIntro: {
      screen: AppIntroScreen,
    },
    login: {
      screen: LoginScreen,
    },
    main : {
      screen: AppTabNavigator
    }
      },{
        index: 0,
        initialRouteName: 'appIntro',
        headerMode: 'none',
        navigationOptions: {
        gesturesEnabled: false
    }}
);
