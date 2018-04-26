import Home from '../components/Home/Home.component';
import {StackNavigator} from 'react-navigation';

const HomeStackNav = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Onsensei'
    }
  }
});

export default HomeStackNav;
