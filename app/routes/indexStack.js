import About from '../components/About/About.component';
import Home from '../components/Home/Home.component';
import Setting from '../components/Setting/Setting.component';
import {StackNavigator} from 'react-navigation';

const HomeStackNav = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  About: {
    screen: About,
    navigationOptions: {
      headerTitle: 'About'
    }
  },
  Setting: {
    screen: Setting,
    navigationOptions: {
      headerTitle: 'Setting'
    }
  }
});

export default HomeStackNav;
