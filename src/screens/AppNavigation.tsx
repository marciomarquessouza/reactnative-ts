import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';

const navigation = createStackNavigator(
  {
    Home: HomeScreen
  }, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Todo'
    }
  }
);

export default createAppContainer(navigation);
